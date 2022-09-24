"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIES = exports.INITIAL_NOTES = void 0;
const CATEGORIES = {
    task: {
        name: "Task",
        selector: "task",
        icon: "fa-solid fa-list-check",
    },
    random: {
        name: "Random thought",
        selector: "random",
        icon: "fa-solid fa-comment-dots",
    },
    idea: {
        name: "Idea",
        selector: "idea",
        icon: "fa-solid fa-lightbulb",
    },
};
exports.CATEGORIES = CATEGORIES;
const INITIAL_NOTES = [
    {
        id: 0,
        date: "April 2, 2021",
        title: "Invention idea",
        text: "If i can find out how to do that thing",
        category: CATEGORIES.idea,
        dates: "",
        archived: false,
    },
    {
        id: 1,
        date: "April 5, 2021",
        title: "The theory of evolution",
        text: "What if dinosaurs was",
        category: CATEGORIES.random,
        dates: "12/20/2012, 01/01/2022",
        archived: false,
    },
    {
        id: 2,
        date: "April 7, 2021",
        title: "Shopping list",
        text: "Tomatoes, bread",
        category: CATEGORIES.task,
        dates: "12/20/2012",
        archived: false,
    },
    {
        id: 3,
        date: "April 7, 2021",
        title: "Invention idea",
        text: "If i can find out how to do that thing",
        category: CATEGORIES.idea,
        dates: "",
        archived: false,
    },
    {
        id: 4,
        date: "April 9, 2021",
        title: "The theory of evolution",
        text: "What if dinosaurs was",
        category: CATEGORIES.random,
        dates: "12/20/2012, 01/01/2022",
        archived: false,
    },
    {
        id: 5,
        date: "April 20, 2021",
        title: "Shopping list",
        text: "Tomatoes, bread",
        category: CATEGORIES.task,
        dates: "12/20/2012",
        archived: false,
    },
    {
        id: 6,
        date: "April 2, 2021",
        title: "Invention idea",
        text: "If i can find out how to do that thing",
        category: CATEGORIES.idea,
        dates: "",
        archived: true,
    },
];
exports.INITIAL_NOTES = INITIAL_NOTES;
