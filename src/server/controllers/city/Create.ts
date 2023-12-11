import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { ICity, createUserSchema } from "../../models/createCitySchema";

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  try {
    await createUserSchema.validate(req.body);
    res
      .status(StatusCodes.ACCEPTED)
      .send("usuario validade pelo schema do models createSchema");
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({ errors: { default: yupError.message } });
  }
};
