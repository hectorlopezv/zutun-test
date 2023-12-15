import { z } from "zod";
const bracketedNumberListRegex = /^\[\s*\d+(\s*,\s*\d+)*\s*\]$/;

const numberArraySchema = z
  .string()
  .min(1, { message: "La entrada no debe estar vacía." })
  .refine(
    (input) => {
      const trimInput = input.trim();
      const validateRegex = bracketedNumberListRegex.test(trimInput);

      if (!validateRegex) {
        return false;
      }
      return true;
    },
    {
      message:
        "Formato inválido. El formato correcto es [número1,número2,...].",
    }
  );

export const formSchema = z.object({
  grifos: numberArraySchema,
  costos: numberArraySchema,
});
