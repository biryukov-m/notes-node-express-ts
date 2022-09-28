import { getNotesStore, setNotesStore } from "../repositories/repositories";

export const getNotesService = () => getNotesStore();

export const getNoteService = (noteId: Number) => {
  try {
    return getNotesStore().filter((note) => note.id === noteId)[0];
  } catch (error) {
    return null;
  }
};

export const deleteNoteService = (noteId: Number) => {
  const notes = getNotesStore();
  const filtered = notes.filter((note) => note.id !== noteId);
  if (filtered.length < notes.length) {
    setNotesStore(filtered);
    return notes.filter((note) => note.id === noteId)[0];
  }
  return null;
};
