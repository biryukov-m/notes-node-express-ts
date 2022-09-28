"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoteService = exports.getNoteService = exports.getNotesService = void 0;
const repositories_1 = require("../repositories/repositories");
const getNotesService = () => (0, repositories_1.getNotesStore)();
exports.getNotesService = getNotesService;
const getNoteService = (noteId) => {
    try {
        return (0, repositories_1.getNotesStore)().filter((note) => note.id === noteId)[0];
    }
    catch (error) {
        return null;
    }
};
exports.getNoteService = getNoteService;
const deleteNoteService = (noteId) => {
    const notes = (0, repositories_1.getNotesStore)();
    const filtered = notes.filter((note) => note.id !== noteId);
    if (filtered.length < notes.length) {
        (0, repositories_1.setNotesStore)(filtered);
        return notes.filter((note) => note.id === noteId)[0];
    }
    return null;
};
exports.deleteNoteService = deleteNoteService;
