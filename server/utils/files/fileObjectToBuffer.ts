import { File } from "buffer";

const fileObjectToBuffer = async (file: File) => {
  const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export { fileObjectToBuffer };
