import { getNotesStore } from "../repositories/repositories";

export const getNotesService = () => getNotesStore();

export const getNoteService = (noteId: Number) => {
  try {
    return getNotesStore().filter((note) => note.id === noteId)[0];
  } catch (error) {
    return null;
  }
};
