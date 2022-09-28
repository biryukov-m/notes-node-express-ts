import { AnyObjectSchema, bool, object, string } from "yup";
import { NextFunction, Request, Response } from "express";
import { INITIAL_CATEGORIES } from "../store/store";

export const validateYup = (schema: AnyObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema.validate(req.query);
      res.locals.data = data;
      next();
    } catch (error) {
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  createNote: object().shape({
    title: string().required(),
    text: string().required(),
    category: string().oneOf(INITIAL_CATEGORIES).required(),
    archived: bool().default(false),
  }),
  updateNote: object().shape({
    title: string(),
    text: string(),
    category: string().oneOf(INITIAL_CATEGORIES),
    archived: bool(),
  }),
};
