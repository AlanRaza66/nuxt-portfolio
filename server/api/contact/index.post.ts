import Mail from "nodemailer/lib/mailer";
import { sendEmail } from "~/server/utils/emails/sendEmail";
import { createBadRequestError } from "~/server/utils/errors";
import { fileObjectToBuffer } from "~/server/utils/files/fileObjectToBuffer";
import { getRequestBody } from "~/server/utils/requests/getRequestBody";
import { validateEmail } from "~/utils/strings/validateEmail";
import { validateFirstName } from "~/utils/strings/validateFirstNameContact";
import { validateMessage } from "~/utils/strings/validateMessage";
import { validateName } from "~/utils/strings/validateNameContact";
import { validateObject } from "~/utils/strings/validateObjetContact";
import { validatePhoneNumber } from "~/utils/strings/validatePhoneNumber";
import { ErrorMessage, RequestBody, ValidationResult } from "~/utils/types";

export default defineEventHandler(async (e) => {
  const { email } = useRuntimeConfig();

  const bodyKeys = [
    "name",
    "firstName",
    "email",
    "phoneNumber",
    "subject",
    "body",
    "attachments",
  ];

  const requestBody: RequestBody<
    [
      "name",
      "firstName",
      "email",
      "phoneNumber",
      "subject",
      "body",
      "attachments"
    ]
  > = await getRequestBody(e, bodyKeys);

  let isAllValid: boolean = true;
  const errorMessages: Record<string, ErrorMessage> = {};
  const nameValidationResult: ValidationResult<string> = validateName(
    requestBody.name
  );
  if (!nameValidationResult.isValid) {
    isAllValid = false;
    errorMessages.name = {
      message: nameValidationResult.message,
    };
  }

  const firstNameValidationResult: ValidationResult<string> = validateFirstName(
    requestBody.firstName
  );
  if (!firstNameValidationResult.isValid) {
    isAllValid = false;
    errorMessages.firstName = {
      message: firstNameValidationResult.message,
    };
  }

  const emailValidationResult: ValidationResult<string> = validateEmail(
    requestBody.email
  );
  if (!emailValidationResult.isValid) {
    isAllValid = false;
    errorMessages.email = {
      message: emailValidationResult.message,
    };
  }

  // phone number is OPTIONAL
  let phoneNumberValidationResult: ValidationResult<string> | null = null;
  if (typeof requestBody.phoneNumber === "string") {
    phoneNumberValidationResult = validatePhoneNumber(requestBody.phoneNumber);

    if (!phoneNumberValidationResult.isValid) {
      isAllValid = false;
      errorMessages.email = {
        message: phoneNumberValidationResult.message,
      };
    }
  }

  const subjectValidationResult: ValidationResult<string> = validateObject(
    requestBody.subject
  );
  if (!subjectValidationResult.isValid) {
    isAllValid = false;
    errorMessages.subject = {
      message: subjectValidationResult.message,
    };
  }

  let bodyValidationResult: ValidationResult<string> | null = null;
  if (typeof requestBody.body === "string") {
    bodyValidationResult = validateMessage(requestBody.body);

    if (!bodyValidationResult.isValid) {
      isAllValid = false;
      errorMessages.body = {
        message: bodyValidationResult.message,
      };
    }
  }

  if (!isAllValid) {
    throw createBadRequestError({
      data: {
        errorMessages,
      },
    });
  }

let attachments: Mail.Attachment[] | undefined;

//   if (requestBody.attachments instanceof File) {
//     attachments = [];
//     const filename: string = requestBody.attachments.name;
//     const buffer = await fileObjectToBuffer(requestBody.attachments);

//     attachments.push({
//       filename,
//       content: buffer,
//     });
//   } else if (
//     Array.isArray(requestBody.attachments) &&
//     requestBody.attachments.every((value) => value instanceof File)
//   ) {
//     attachments = await Promise.all(
//       requestBody.attachments.map(
//         async (
//           file: File
//         ): Promise<{
//           filename: string;
//           content: Buffer;
//         }> => ({
//           filename: file.name,
//           content: await fileObjectToBuffer(file),
//         })
//       )
//     );
//   }

  const now = Date.now();

  // ! Since it can take several minutes, we won't wait for it
  sendEmail({
    from: emailValidationResult.result,
    to: email,
    subject: subjectValidationResult.result,
    body: bodyValidationResult?.result ?? "",
    attachments,
  }).then(() =>
    sendEmail({
      from: email,
      to: emailValidationResult.result,
      subject: subjectValidationResult.result,
      body: "<h2>Hello World!</h2>",
    })
  );

  return {
    message: "sent",
  };
});
