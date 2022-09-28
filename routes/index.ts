import express from "express";
import {
  getAllNotes,
  getNote,
  getStats,
  deleteNote,
  createNote,
  updateNote,
} from "../controllers/controllers";
import { Schemas, validateYup } from "../middleware/middleware";

export const router = express.Router();

router.get("/notes/stats", getStats);

router
  .route("/notes/:id")
  .get(getNote)
  .delete(deleteNote)
  .patch(validateYup(Schemas.updateNote), updateNote);

router
  .route("/notes")
  .get(getAllNotes)
  .post(validateYup(Schemas.createNote), createNote);
