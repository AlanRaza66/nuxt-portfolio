import { ValidationResult } from "~/utils/types";

const validateRequiredCondition = (
  email: unknown,
  validationResult: ValidationResult<string>
) => {
  if (!email) {
    validationResult.message = "Le mail est requis.";
    validationResult.code = "E2_70";
    validationResult.isValid = false;
  }
};

const validateFormatCondition = (
  email: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof email !== "string") {
    validationResult.message = "Le mail doit être une chaîne.";
    validationResult.code = "E2_71";
    validationResult.isValid = false;
  }
};

const validateIsEmail = (
  email: string,
  validationResult: ValidationResult<string>
) => {
  // Expression régulière pour valider une adresse e-mail
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  if (!regex.test(email)) {
    validationResult.message = "La structure de l'adresse n'est pas conforme";
    validationResult.code = "E2_72";
    validationResult.isValid = false;
  } else {
    validationResult.result = email;
  }
};

const validateEmail = (email: unknown): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: email as string,
    code: null,
    message: null,
  };

  validateRequiredCondition(email, validationResult);
  if (!validationResult.isValid) return validationResult; // we return the validation result if ONE condition is NOT fulfilled

  validateFormatCondition(email, validationResult);
  if (!validationResult.isValid) return validationResult;

  validateIsEmail(validationResult.result, validationResult);
  return validationResult;
};

export { validateEmail };
