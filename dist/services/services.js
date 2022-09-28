"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteService = exports.createNoteService = exports.deleteNoteService = exports.getNoteService = exports.getNotesService = void 0;
const repositories_1 = require("../repositories/repositories");
const helpers_1 = require("../helpers/helpers");
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
const createNoteService = (data) => {
    const notes = (0, repositories_1.getNotesStore)();
    const newNote = {
        id: (0, helpers_1.nextNoteId)(notes),
        date: (0, helpers_1.getDate)(),
        title: data.title,
        text: data.text,
        category: data.category,
        dates: (0, helpers_1.parseDates)(data.text),
        archived: data.archived,
    };
    (0, repositories_1.setNotesStore)([...notes, newNote]);
    return newNote;
};
exports.createNoteService = createNoteService;
const updateNoteService = (data, noteId) => {
    const notes = (0, repositories_1.getNotesStore)();
    let updatedNote;
    const newNotes = notes.map((note) => {
        if (note.id !== noteId) {
            return note;
        }
        else {
            const updatedFields = {
                title: data.title ? data.title : note.title,
                text: data.text ? data.text : note.text,
                category: data.category ? data.category : note.category,
                dates: data.text ? (0, helpers_1.parseDates)(data.text) : note.dates,
                archived: data.archived ? data.archived : note.archived,
            };
            updatedNote = Object.assign(Object.assign({}, note), updatedFields);
            return updatedNote;
        }
    });
    (0, repositories_1.setNotesStore)(newNotes);
    return updatedNote;
};
exports.updateNoteService = updateNoteService;
