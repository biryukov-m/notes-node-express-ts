"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteService = exports.getNotesService = void 0;
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
