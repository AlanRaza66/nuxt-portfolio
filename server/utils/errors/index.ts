import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { errorConfig } from "~/utils/configs/errorConfig";

const createBadRequestError = ({
  message = errorConfig.DEFAULT_BAD_REQUEST_ERROR_MESSAGE,
  isPrivate = false,
  data,
}: {
  message?: string;
  isPrivate?: boolean;
  data?: any;
} = {}) =>
  createError({
    data,
    message: isPrivate
      ? errorConfig.DEFAULT_BAD_REQUEST_ERROR_MESSAGE
      : message,
    statusCode: StatusCodes.BAD_REQUEST,
    statusMessage: getReasonPhrase(StatusCodes.BAD_REQUEST),
  });

const createNotFoundError = (
  args: {
    message?: string;
    isPrivate?: boolean;
    data?: any;
  } = {
    message: errorConfig.DEFAULT_NOT_FOUND_ERROR_MESSAGE,
    isPrivate: false,
    data: null,
  }
) =>
  createError({
    data: args.data,
    message: args.isPrivate
      ? errorConfig.DEFAULT_NOT_FOUND_ERROR_MESSAGE
      : args.message,
    statusCode: StatusCodes.NOT_FOUND,
    statusMessage: getReasonPhrase(StatusCodes.NOT_FOUND),
  });

const createForbiddenError = ({
  message = errorConfig.DEFAULT_FORBIDDEN_ERROR_MESSAGE,
  isPrivate = false,
  data,
}: {
  message?: string;
  isPrivate?: boolean;
  data?: unknown | undefined;
} = {}) =>
  createError({
    data,
    message: isPrivate ? errorConfig.DEFAULT_FORBIDDEN_ERROR_MESSAGE : message,
    statusCode: StatusCodes.FORBIDDEN,
    statusMessage: getReasonPhrase(StatusCodes.FORBIDDEN),
  });

const createUnknownError = ({
  message = errorConfig.DEFAULT_UNKNOWN_ERROR_MESSAGE,
  isPrivate = false,
  data,
}: {
  message?: string;
  isPrivate?: boolean;
  data?: unknown | undefined;
} = {}) =>
  createError({
    data,
    message: isPrivate ? errorConfig.DEFAULT_FORBIDDEN_ERROR_MESSAGE : message,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    statusMessage: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  });

export {
  createBadRequestError,
  createNotFoundError,
  createForbiddenError,
  createUnknownError,
};
