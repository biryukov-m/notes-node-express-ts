import express from "express";
import {
  getAllNotes,
  getNote,
  getStatsRoute,
  deleteNote,
  createNote,
  updateNoteRoute,
} from "../controllers/controllers";
import { Schemas, validateYup } from "../middleware/middleware";

export const router = express.Router();

router.get("/notes/stats", getStatsRoute);

router
  .route("/notes/:id")
  .get(getNote)
  .delete(deleteNote)
  .patch(validateYup(Schemas.updateNote), updateNoteRoute);

router
  .route("/notes")
  .get(getAllNotes)
  .post(validateYup(Schemas.createNote), createNote);
