"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsRoute = exports.updateNoteRoute = exports.createNoteRoute = exports.deleteNoteRoute = exports.getNoteRoute = exports.getAllNotesRoute = void 0;
const repositories_1 = require("../repositories/repositories");
const helpers_1 = require("../helpers/helpers");
const getAllNotesRoute = (req, res) => res.json(repositories_1.notesStore);
exports.getAllNotesRoute = getAllNotesRoute;
const getNoteRoute = (req, res) => {
    try {
        let response;
        let filtered = [...(0, repositories_1.getNotesStore)()].filter((note) => note.id === Number(req.params.id));
        if (filtered.length > 0) {
            response = filtered[0];
            res.json(response);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.getNoteRoute = getNoteRoute;
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
            category: repositories_1.INITIAL_CATEGORIES[data.category],
            dates: (0, helpers_1.parseDates)(data.text),
            archived: data.archived,
        };
        (0, repositories_1.setNotesStore)([...(0, repositories_1.getNotesStore)(), newNote]);
        res.sendStatus(200);
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
};
exports.createNoteRoute = createNoteRoute;
const updateNoteRoute = (req, res) => {
    try {
        const data = res.locals.data;
        const updatedFields = {
            title: data.title,
            text: data.text,
            category: repositories_1.INITIAL_CATEGORIES[data.category],
            dates: (0, helpers_1.parseDates)(data.text),
            archived: data.archived,
        };
        const notes = (0, repositories_1.getNotesStore)();
        const newNotes = [...notes].map((note) => {
            if (note.id !== Number(req.params.id)) {
                return note;
            }
            else {
                console.log("note!!!!!!!!", note);
                console.log(Object.assign(Object.assign({}, note), updatedFields));
                return Object.assign(Object.assign({}, note), updatedFields);
            }
        });
        (0, repositories_1.setNotesStore)(newNotes);
        res.sendStatus(200);
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
};
exports.updateNoteRoute = updateNoteRoute;
const getStatsRoute = (req, res) => {
    const summary = (0, helpers_1.calculateSummary)(repositories_1.INITIAL_CATEGORIES, repositories_1.notesStore);
    res.json(summary);
};
exports.getStatsRoute = getStatsRoute;
