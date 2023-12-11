import * as yup from "yup";

export interface ICity {
  name?: string;
}

export const createUserSchema: yup.Schema<ICity> = yup.object({
  name: yup.string().required().min(3),
});
