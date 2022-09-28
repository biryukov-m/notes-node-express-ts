import { getNotesStore, setNotesStore } from "../repositories/repositories";
import { nextNoteId, getDate, parseDates } from "../helpers/helpers";
import { Note, Notes } from "../store/store";

export const getNotesService = () => getNotesStore();

export const getNoteService = (noteId: Number) => {
  try {
    return getNotesStore().filter((note) => note.id === noteId)[0];
  } catch (error) {
    return null;
  }
};

export const deleteNoteService = (noteId: Number) => {
  const notes: Notes = getNotesStore();
  const filtered = notes.filter((note) => note.id !== noteId);
  if (filtered.length < notes.length) {
    setNotesStore(filtered);
    return notes.filter((note) => note.id === noteId)[0];
  }
  return null;
};

type CreateNoteData = {
  title: string;
  text: string;
  category: string;
  archived: boolean;
};
export const createNoteService = (data: CreateNoteData) => {
  const notes: Notes = getNotesStore();
  const newNote: Note = {
    id: nextNoteId(notes),
    date: getDate(),
    title: data.title,
    text: data.text,
    category: data.category,
    dates: parseDates(data.text),
    archived: data.archived,
  };
  setNotesStore([...notes, newNote]);
  return newNote;
};
