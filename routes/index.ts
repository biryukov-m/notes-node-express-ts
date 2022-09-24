import express from "express";
import {
  getAllNotesRoute,
  getNoteRoute,
  getStatsRoute,
  deleteNoteRoute,
  createNoteRoute,
  updateNoteRoute,
} from "../services/services";
import { Schemas, validateYup } from "../middleware/middleware";

export const router = express.Router();

router.get("/notes/stats", getStatsRoute);

router
  .route("/notes/:id")
  .get(getNoteRoute)
  .delete(deleteNoteRoute)
  .patch(validateYup(Schemas.note), updateNoteRoute);

router
  .route("/notes")
  .get(getAllNotesRoute)
  .post(validateYup(Schemas.note), createNoteRoute);
