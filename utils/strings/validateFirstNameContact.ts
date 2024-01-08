import { contactConfig } from "~/utils/configs/contactConfig";
import { type ValidationResult } from "~/utils/types";

const validateRequiredCondition = (
  firstName: unknown,
  validationResult: ValidationResult<string>
) => {
  if (!firstName) {
    validationResult.message = "Le prénom est requis.";
    validationResult.isValid = false;
  }
};

const validateFormatCondition = (
  firstName: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof firstName !== "string") {
    validationResult.message = "Le prénom doit être une chaîne.";
    validationResult.isValid = false;
  }
};

const validateLengthCondition = (
  firstName: string,
  validationResult: ValidationResult<string>
) => {
  const trimmed: string = firstName.trim();

  const maxFirstNameLength: number = contactConfig.MAX_FIRSTNAME_LENGTH;

  if (trimmed.length > maxFirstNameLength) {
    validationResult.message = `Le prénom ne doit pas dépasser les ${maxFirstNameLength} caractères.`;
    validationResult.isValid = false;
  } else {
    validationResult.result = trimmed;
  }
};

const validateFirstName = (firstName: unknown): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: firstName as string,
    message: null,
  };

  validateRequiredCondition(firstName, validationResult);
  if (!validationResult.isValid) return validationResult; // we return the validation result if ONE condition is NOT fulfilled

  validateFormatCondition(firstName, validationResult);
  if (!validationResult.isValid) return validationResult;

  validateLengthCondition(validationResult.result, validationResult);

  return validationResult;
};

export { validateFirstName };
