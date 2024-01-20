import { type ValidationResult } from "~/utils/types";

const validateFormatCondition = (
  message: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof message !== "string") {
    validationResult.message = "The message must be a string.";
    validationResult.isValid = false;
  }
};

const validateMessage = (message: string): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: message as string,
    message: null,
  };

  validateFormatCondition(message, validationResult);
  if (!validationResult.isValid) return validationResult;
  return validationResult;
};

export { validateMessage };
