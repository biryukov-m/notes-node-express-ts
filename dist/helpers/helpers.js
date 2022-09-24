"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDates = exports.nextNoteId = exports.calculateSummary = exports.getDate = void 0;
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const getDate = () => {
    const dateObj = new Date(), month = MONTHS[dateObj.getMonth()], day = dateObj.getDate(), year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
};
exports.getDate = getDate;
const calculateSummary = (categories, notes) => {
    let summary = {};
    for (const key in categories) {
        const category = categories[key];
        summary[category.selector] = {
            active: 0,
            archived: 0,
            selector: category.selector,
            name: category.name,
        };
    }
    notes.forEach((note) => {
        if (note.archived) {
            summary[note.category.selector].archived += 1;
        }
        else {
            summary[note.category.selector].active += 1;
        }
    });
    return summary;
};
exports.calculateSummary = calculateSummary;
const nextNoteId = (notes) => {
    const maxId = notes.reduce((maxId, note) => Math.max(note.id, maxId), -1);
    return maxId + 1;
};
exports.nextNoteId = nextNoteId;
const parseDates = (text) => {
    const regEx = /((?<!\d)(0?[1-9]|1[0-2])[/.-](0?[1-9]|[12]\d|3[01])[/.-]([12]\d{3}|[12]\d))(?!\d)/g;
    const match = text.match(regEx);
    return match ? match.join(", ") : "";
};
exports.parseDates = parseDates;
