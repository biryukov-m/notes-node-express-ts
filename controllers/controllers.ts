import { Request, Response } from "express";
import { Note, Notes } from "../store/store";
import {
  createNoteService,
  deleteNoteService,
  getNoteService,
  getNotesService,
  updateNoteService,
  getStatsService,
} from "../services/services";

export const getAllNotes = (req: Request, res: Response) => {
  try {
    const notes: Notes = getNotesService();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getNote = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw TypeError;
    }
    const note: Note | null = getNoteService(id);
    note
      ? res.json(note)
      : res.status(404).json(`Note with id: ${req.params.id} not found`);
  } catch (error) {
    error === TypeError
      ? res.status(400).json("Note id must be a number")
      : res.status(500).json({ error });
  }
};

export const deleteNote = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw TypeError;
    }
    const note: Note | null = deleteNoteService(id);
    note
      ? res.sendStatus(200)
      : res.status(404).json(`Note with id: ${req.params.id} not found`);
  } catch (error) {
    error === TypeError
      ? res.status(400).json("Note id must be a number")
      : res.status(500).json({ error });
  }
};

export const createNote = (req: Request, res: Response) => {
  try {
    const data = res.locals.data;
    const createdNote = createNoteService(data);
    res.status(200).json(createdNote);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateNote = (req: Request, res: Response) => {
  try {
    const data = res.locals.data;
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw TypeError;
    }
    const updatedNote = updateNoteService(data, id);
    updatedNote
      ? res.status(200).json(updatedNote)
      : res.status(404).json(`Note with id: ${req.params.id} not found`);
  } catch (error) {
    error === TypeError
      ? res.status(400).json("Note id must be a number")
      : res.status(500).json({ error });
  }
};

export const getStats = (req: Request, res: Response) => {
  try {
    res.status(200).json(getStatsService());
  } catch (error) {
    res.status(500).json({ error });
  }
};
