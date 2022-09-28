"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.updateNote = exports.createNote = exports.deleteNote = exports.getNote = exports.getAllNotes = void 0;
const services_1 = require("../services/services");
const getAllNotes = (req, res) => {
    try {
        const notes = (0, services_1.getNotesService)();
        res.json(notes);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.getAllNotes = getAllNotes;
const getNote = (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw TypeError;
        }
        const note = (0, services_1.getNoteService)(id);
        note
            ? res.json(note)
            : res.status(404).json(`Note with id: ${req.params.id} not found`);
    }
    catch (error) {
        error === TypeError
            ? res.status(400).json("Note id must be a number")
            : res.status(500).json({ error });
    }
};
exports.getNote = getNote;
const deleteNote = (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw TypeError;
        }
        const note = (0, services_1.deleteNoteService)(id);
        note
            ? res.sendStatus(200)
            : res.status(404).json(`Note with id: ${req.params.id} not found`);
    }
    catch (error) {
        error === TypeError
            ? res.status(400).json("Note id must be a number")
            : res.status(500).json({ error });
    }
};
exports.deleteNote = deleteNote;
const createNote = (req, res) => {
    try {
        const data = res.locals.data;
        const createdNote = (0, services_1.createNoteService)(data);
        res.status(200).json(createdNote);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.createNote = createNote;
const updateNote = (req, res) => {
    try {
        const data = res.locals.data;
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw TypeError;
        }
        const updatedNote = (0, services_1.updateNoteService)(data, id);
        updatedNote
            ? res.status(200).json(updatedNote)
            : res.status(404).json(`Note with id: ${req.params.id} not found`);
    }
    catch (error) {
        error === TypeError
            ? res.status(400).json("Note id must be a number")
            : res.status(500).json({ error });
    }
};
exports.updateNote = updateNote;
const getStats = (req, res) => {
    try {
        res.status(200).json((0, services_1.getStatsService)());
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.getStats = getStats;
