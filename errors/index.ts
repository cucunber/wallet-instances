import { IError } from "../interface";

export const chainError: (text?: string) => IError = (text) => ({
    code: 4,
    message: {
      title: "Error",
      subtitle: "Chain error",
      text,
    },
  });