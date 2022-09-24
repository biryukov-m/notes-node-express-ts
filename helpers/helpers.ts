import { Note, Categories } from "../repositories/repositories";

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

export const getDate = () => {
  const dateObj = new Date(),
    month = MONTHS[dateObj.getMonth()],
    day = dateObj.getDate(),
    year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
};

export type SummaryData = {
  [key: string]: {
    active: number;
    archived: number;
    selector: string;
    name: string;
  };
};

export const calculateSummary = (categories: Categories, notes: Note[]) => {
  let summary: SummaryData = {};

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
    } else {
      summary[note.category.selector].active += 1;
    }
  });

  return summary;
};

export const nextNoteId = (notes: Note[]) => {
  const maxId = notes.reduce((maxId, note) => Math.max(note.id, maxId), -1);
  return maxId + 1;
};

export const parseDates = (text: string) => {
  const regEx =
    /((?<!\d)(0?[1-9]|1[0-2])[/.-](0?[1-9]|[12]\d|3[01])[/.-]([12]\d{3}|[12]\d))(?!\d)/g;
  const match = text.match(regEx);
  return match ? match.join(", ") : "";
};
