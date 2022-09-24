import { AnyObjectSchema, bool, object, string } from "yup";
import { NextFunction, Request, Response } from "express";
import { INITIAL_CATEGORIES } from "../repositories/repositories";

export const validateYup = (schema: AnyObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema.validate(req.query);
      console.log(data);
      res.locals.data = data;
      next();
    } catch (error) {
      console.log(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  note: object().shape({
    title: string().required(),
    text: string().required(),
    category: string().oneOf(Object.keys(INITIAL_CATEGORIES)),
    archived: bool().default(false),
  }),
};
