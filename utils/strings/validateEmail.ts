import { type ValidationResult } from "~/utils/types";

const validateRequiredCondition = (
  email: unknown,
  validationResult: ValidationResult<string>
) => {
  if (!email) {
    validationResult.message = "Le mail est requis.";
    validationResult.isValid = false;
  }
};

const validateFormatCondition = (
  email: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof email !== "string") {
    validationResult.message = "Le mail doit être une chaîne.";
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
    validationResult.isValid = false;
  } else {
    validationResult.result = email;
  }
};

const validateEmail = (email: unknown): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: email as string,
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
