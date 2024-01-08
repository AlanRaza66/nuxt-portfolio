import { contactConfig } from "~/utils/configs/contactConfig";
import { type ValidationResult } from "~/utils/types";

const validateFormatCondition = (
  tel: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof tel !== "string") {
    validationResult.message = "Le numero doit être une chaîne.";
    validationResult.isValid = false;
  }
};

const validateIsPhoneNumber = (
  tel: string,
  validationResult: ValidationResult<string>
) => {
  // Expression régulière pour valider un numéro de téléphone
  const regex = /^[+]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;
  if (!regex.test(tel)) {
    validationResult.message =
      "La structure du numéro de téléphone n'est pas conforme";
    validationResult.isValid = false;
  }
};

const validateLengthCondition = (
  tel: string,
  validationResult: ValidationResult<string>
) => {
  const trimmed: string = tel.trim();

  const maxPhoneNumberLength: number = contactConfig.MAX_PHONE_NUMBER_LENGTH;

  if (trimmed.length > maxPhoneNumberLength) {
    validationResult.message = `Le numéro de téléphone ne doit pas dépasser les ${maxPhoneNumberLength} caractères.`;
    validationResult.isValid = false;
  } else {
    validationResult.result = trimmed;
  }
};

const validatePhoneNumber = (tel: string): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: tel as string,
    message: null,
  };

  validateLengthCondition(tel, validationResult);

  validateFormatCondition(tel, validationResult);

  validateIsPhoneNumber(tel, validationResult);
  if (!validationResult.isValid) return validationResult;
  return validationResult;
};

export { validatePhoneNumber };
