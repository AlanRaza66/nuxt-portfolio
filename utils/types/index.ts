export type ErrorMessage = {
  message: string;
};

export type ValidResult<T> = {
  isValid: true;
  result: T;
  message: null;
};

export type InvalidResult<T> = {
  isValid: false;
  // eslint-disable-next-line no-unused-vars
  result: { [P in keyof T]: null };
  message: string;
};

export type ValidationResult<T> = ValidResult<T> | InvalidResult<T>;

export type RequestBody<T extends string[]> = Record<T[number], unknown>;
