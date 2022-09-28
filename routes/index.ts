import express from "express";
import {
  getAllNotes,
  getNote,
  getStatsRoute,
  deleteNoteRoute,
  createNoteRoute,
  updateNoteRoute,
} from "../controllers/controllers";
import { Schemas, validateYup } from "../middleware/middleware";

export const router = express.Router();

router.get("/notes/stats", getStatsRoute);

router
  .route("/notes/:id")
  .get(getNote)
  .delete(deleteNoteRoute)
  .patch(validateYup(Schemas.updateNote), updateNoteRoute);

router
  .route("/notes")
  .get(getAllNotes)
  .post(validateYup(Schemas.createNote), createNoteRoute);
