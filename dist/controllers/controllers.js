"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsRoute = exports.updateNoteRoute = exports.createNote = exports.deleteNote = exports.getNote = exports.getAllNotes = void 0;
const repositories_1 = require("../repositories/repositories");
const helpers_1 = require("../helpers/helpers");
const store_1 = require("../store/store");
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
        if (!id) {
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
        if (!id) {
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
const updateNoteRoute = (req, res) => {
    try {
        const data = res.locals.data;
        const notes = (0, repositories_1.getNotesStore)();
        const newNotes = [...notes].map((note) => {
            if (note.id !== Number(req.params.id)) {
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
                return Object.assign(Object.assign({}, note), updatedFields);
            }
        });
        (0, repositories_1.setNotesStore)(newNotes);
        res.sendStatus(200);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.updateNoteRoute = updateNoteRoute;
const getStatsRoute = (req, res) => {
    const summary = (0, helpers_1.calculateSummary)(store_1.INITIAL_CATEGORIES, repositories_1.notesStore);
    res.json(summary);
};
exports.getStatsRoute = getStatsRoute;
