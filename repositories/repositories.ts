import { INITIAL_NOTES, Notes } from "../store/store";

export let notesStore = INITIAL_NOTES;

export const setNotesStore = (newNotesStore: Notes) =>
  (notesStore = newNotesStore);

export const getNotesStore = () => [...notesStore];
