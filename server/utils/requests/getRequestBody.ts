import type { H3Event } from "h3";
import { type RequestBody } from "~/utils/types";

const getRequestBody = async <T extends string[]>(
  e: H3Event,
  keys: T
): Promise<RequestBody<T>> => {
  const result: RequestBody<T> = {} as RequestBody<T>;

  keys.forEach((key) => {
    // initialize with null value
    result[key as keyof typeof result] = null;
  });

  const requestContentType: string | undefined = getHeader(e, "Content-Type");

  if (requestContentType !== undefined) {
    if (requestContentType.startsWith("application/json")) {
      const JSONBody: any = await readBody(e);

      if (typeof JSONBody === "object") {
        keys.forEach((key) => {
          if (
            Object.prototype.hasOwnProperty.call(JSONBody, key) &&
            Object.prototype.hasOwnProperty.call(result, key)
          ) {
            result[key as keyof typeof result] = JSONBody[key];
          }
        });
      }
    } else if (
      requestContentType.startsWith("application/x-www-form-urlencoded") ||
      requestContentType.startsWith("multipart/form-data")
    ) {
      const formaData: FormData = await readFormData(e);

      const usedKeys: Set<string> = new Set();

      formaData.forEach((value, key) => {
        if (keys.includes(key)) {
          if (usedKeys.has(key)) {
            if (Array.isArray(result[key as keyof typeof result])) {
              (result[key as keyof typeof result] as Array<unknown>).push(
                value
              );
            } else {
              result[key as keyof typeof result] = [
                result[key as keyof typeof result],
                value,
              ];
            }
          } else {
            result[key as keyof typeof result] = value;
          }

          usedKeys.add(key);
        }
      });
    }
  }

  return result;
};

export { getRequestBody };
