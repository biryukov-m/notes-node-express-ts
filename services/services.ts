import { Request, Response } from "express";
import {
  notesStore,
  setNotesStore,
  getNotesStore,
  Note,
} from "../repositories/repositories";
import {
  calculateSummary,
  parseDates,
  nextNoteId,
  getDate,
} from "../helpers/helpers";
import { INITIAL_CATEGORIES } from "../store/store";

export const getAllNotesRoute = (req: Request, res: Response) =>
  res.json(notesStore);

export const getNoteRoute = (req: Request, res: Response) => {
  try {
    let response;
    let filtered = [...getNotesStore()].filter(
      (note) => note.id === Number(req.params.id)
    );

    if (filtered.length > 0) {
      response = filtered[0];
      res.json(response);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteNoteRoute = (req: Request, res: Response) => {
  try {
    let filtered = [...getNotesStore()].filter(
      (note) => note.id !== Number(req.params.id)
    );

    if (filtered.length < notesStore.length) {
      setNotesStore(filtered);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createNoteRoute = (req: Request, res: Response) => {
  try {
    const data = res.locals.data;
    const newNote = {
      id: nextNoteId(getNotesStore()),
      date: getDate(),
      title: data.title,
      text: data.text,
      category: data.category,
      dates: parseDates(data.text),
      archived: data.archived,
    };

    setNotesStore([...getNotesStore(), newNote]);
    res.sendStatus(200);
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
