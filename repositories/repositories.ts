import { INITIAL_CATEGORIES, INITIAL_NOTES } from "../store/store";

export let notesStore = INITIAL_NOTES;

export const setNotesStore = (newNotesStore: Notes) =>
  (notesStore = newNotesStore);
export const getNotesStore = () => [...notesStore];

export type Category = typeof INITIAL_CATEGORIES[0];
export type Categories = typeof INITIAL_CATEGORIES;
export type Note = typeof INITIAL_NOTES[0];
export type Notes = Array<Note>;
