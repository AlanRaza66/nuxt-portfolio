import { contactConfig } from "~/utils/configs/contactConfig";
import { ValidationResult } from "~/utils/types";

const validateRequiredCondition = (
  objet: unknown,
  validationResult: ValidationResult<string>
) => {
  if (!objet) {
    validationResult.message = "L'objet du message est requis.";
    validationResult.code = "E2_76";
    validationResult.isValid = false;
  }
};

const validateFormatCondition = (
  objet: unknown,
  validationResult: ValidationResult<string>
) => {
  if (typeof objet !== "string") {
    validationResult.message = "L'objet doit être une chaîne.";
    validationResult.code = "E2_77";
    validationResult.isValid = false;
  } else {
    validationResult.result = objet;
  }
};

const validateLengthCondition = (
  objet: string,
  validationResult: ValidationResult<string>
) => {
  const trimmed: string = objet.trim();

  const maxObjectLength: number = contactConfig.MAX_OBJECT_LENGTH;

  if (trimmed.length > maxObjectLength) {
    validationResult.message = `L'objet du message ne doit pas dépasser les ${maxObjectLength} caractères.`;
    validationResult.code = "E2_78";
    validationResult.isValid = false;
  } else {
    validationResult.result = trimmed;
  }
};

const validateObject = (objet: unknown): ValidationResult<string> => {
  const validationResult: ValidationResult<string> = {
    isValid: true,
    result: objet as string,
    code: null,
    message: null,
  };

  validateRequiredCondition(objet, validationResult);
  validateFormatCondition(objet, validationResult);
  validateLengthCondition(validationResult.result, validationResult);
  if (!validationResult.isValid) return validationResult;
  return validationResult;
};

export { validateObject };
