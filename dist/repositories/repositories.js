"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesStore = exports.setNotesStore = exports.notesStore = exports.INITIAL_NOTES = exports.INITIAL_CATEGORIES = void 0;
exports.INITIAL_CATEGORIES = {
    task: {
        name: "Task",
        selector: "task",
    },
    random: {
        name: "Random thought",
        selector: "random",
    },
    idea: {
        name: "Idea",
        selector: "idea",
    },
};
exports.INITIAL_NOTES = [
    {
        id: 0,
        date: "April 2, 2021",
        title: "Invention idea",
        text: "If i can find out how to do that thing",
        category: exports.INITIAL_CATEGORIES.idea,
        dates: "",
        archived: false,
    },
    {
        id: 1,
        date: "April 5, 2021",
        title: "The theory of evolution",
        text: "What if dinosaurs was",
        category: exports.INITIAL_CATEGORIES.random,
        dates: "12/20/2012, 01/01/2022",
        archived: false,
    },
    {
        id: 2,
        date: "April 7, 2021",
        title: "Shopping list",
        text: "Tomatoes, bread",
        category: exports.INITIAL_CATEGORIES.task,
        dates: "12/20/2012",
        archived: false,
    },
    {
        id: 3,
        date: "April 7, 2021",
        title: "Invention idea",
        text: "If i can find out how to do that thing",
        category: exports.INITIAL_CATEGORIES.idea,
        dates: "",
        archived: false,
    },
    {
        id: 4,
        date: "April 9, 2021",
        title: "The theory of evolution",
        text: "What if dinosaurs was",
        category: exports.INITIAL_CATEGORIES.random,
        dates: "12/20/2012, 01/01/2022",
        archived: false,
    },
    {
        id: 5,
        date: "April 20, 2021",
        title: "Shopping list",
        text: "Tomatoes, bread",
        category: exports.INITIAL_CATEGORIES.task,
        dates: "12/20/2012",
        archived: false,
    },
    {
        id: 6,
        date: "April 2, 2021",
        title: "Invention idea",
        text: "If i can find out how to do that thing",
        category: exports.INITIAL_CATEGORIES.idea,
        dates: "",
        archived: true,
    },
];
exports.notesStore = exports.INITIAL_NOTES;
const setNotesStore = (newNotesStore) => (exports.notesStore = newNotesStore);
exports.setNotesStore = setNotesStore;
const getNotesStore = () => [...exports.notesStore];
exports.getNotesStore = getNotesStore;
