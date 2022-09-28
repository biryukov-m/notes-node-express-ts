import { Request, Response } from "express";
import {
  notesStore,
  setNotesStore,
  getNotesStore,
} from "../repositories/repositories";
import {
  calculateSummary,
  parseDates,
  nextNoteId,
  getDate,
} from "../helpers/helpers";
import { INITIAL_CATEGORIES, Note, Notes } from "../store/store";
import {
  createNoteService,
  deleteNoteService,
  getNoteService,
  getNotesService,
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
    if (!id) {
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
    if (!id) {
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

export const updateNoteRoute = (req: Request, res: Response) => {
  try {
    const data = res.locals.data;
    const notes = getNotesStore();
    const newNotes: Note[] = [...notes].map((note) => {
      if (note.id !== Number(req.params.id)) {
        return note;
      } else {
        const updatedFields = {
          title: data.title ? data.title : note.title,
          text: data.text ? data.text : note.text,
          category: data.category ? data.category : note.category,
          dates: data.text ? parseDates(data.text) : note.dates,
          archived: data.archived ? data.archived : note.archived,
        };
        return { ...note, ...updatedFields };
      }
    });
    setNotesStore(newNotes);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getStatsRoute = (req: Request, res: Response) => {
  const summary = calculateSummary(INITIAL_CATEGORIES, notesStore);
  res.json(summary);
};
