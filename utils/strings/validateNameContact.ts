import { contactConfig } from "~/utils/configs/contactConfig";
import { type ValidationResult } from "~/utils/types";

const validateRequiredCondition = (
  name: unknown,
  validationResult: ValidationResult<string>
) => {
  if (!name) {
    validationResult.message = "The name is required.";
    validationResult.isValid = false;
  }
};

const validateFormatCondition = (
  name: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof name !== "string") {
    validationResult.message = "The name must be a string.";
    validationResult.isValid = false;
  }
};

const validateLengthCondition = (
  name: string,
  validationResult: ValidationResult<string>
) => {
  const trimmed: string = name.trim();

  const maxNameLength: number = contactConfig.MAX_NAME_LENGTH;

  if (trimmed.length > maxNameLength) {
    validationResult.message = `The name must not exceed ${maxNameLength} characters.`;
    validationResult.isValid = false;
  } else {
    validationResult.result = trimmed;
  }
};

const validateName = (name: unknown): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: name as string,
    message: null,
  };

  validateRequiredCondition(name, validationResult);
  if (!validationResult.isValid) return validationResult; // we return the validation result if ONE condition is NOT fulfilled

  validateFormatCondition(name, validationResult);
  if (!validationResult.isValid) return validationResult;

  validateLengthCondition(validationResult.result, validationResult);

  return validationResult;
};

export { validateName };
