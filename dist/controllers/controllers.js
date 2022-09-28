"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsRoute = exports.updateNoteRoute = exports.createNoteRoute = exports.deleteNoteRoute = exports.getNote = exports.getAllNotes = void 0;
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
        res.status(500).send(error);
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
            ? res.status(400).send("Note id must be a number")
            : res.status(500).send(error);
    }
};
exports.getNote = getNote;
const deleteNoteRoute = (req, res) => {
    try {
        let filtered = [...(0, repositories_1.getNotesStore)()].filter((note) => note.id !== Number(req.params.id));
        if (filtered.length < repositories_1.notesStore.length) {
            (0, repositories_1.setNotesStore)(filtered);
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.deleteNoteRoute = deleteNoteRoute;
const createNoteRoute = (req, res) => {
    try {
        const data = res.locals.data;
        const newNote = {
            id: (0, helpers_1.nextNoteId)((0, repositories_1.getNotesStore)()),
            date: (0, helpers_1.getDate)(),
            title: data.title,
            text: data.text,
            category: data.category,
            dates: (0, helpers_1.parseDates)(data.text),
            archived: data.archived,
        };
        (0, repositories_1.setNotesStore)([...(0, repositories_1.getNotesStore)(), newNote]);
        res.sendStatus(200);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.createNoteRoute = createNoteRoute;
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
