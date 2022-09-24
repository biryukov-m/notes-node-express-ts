"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = exports.validateYup = void 0;
const yup_1 = require("yup");
const repositories_1 = require("../repositories/repositories");
const validateYup = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield schema.validate(req.query);
            console.log(data);
            res.locals.data = data;
            next();
        }
        catch (error) {
            console.log(error);
            return res.status(422).json({ error });
        }
    });
};
exports.validateYup = validateYup;
exports.Schemas = {
    note: (0, yup_1.object)().shape({
        title: (0, yup_1.string)().required(),
        text: (0, yup_1.string)().required(),
        category: (0, yup_1.string)().oneOf(Object.keys(repositories_1.INITIAL_CATEGORIES)).required(),
        archived: (0, yup_1.bool)().default(false),
    }),
};
