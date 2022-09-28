"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesStore = exports.setNotesStore = exports.notesStore = void 0;
const store_1 = require("../store/store");
exports.notesStore = store_1.INITIAL_NOTES;
const setNotesStore = (newNotesStore) => (exports.notesStore = newNotesStore);
exports.setNotesStore = setNotesStore;
const getNotesStore = () => [...exports.notesStore];
exports.getNotesStore = getNotesStore;
