import { Note, Categories } from "../store/store";

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
    name: string;
    active: number;
    archived: number;
  };
};

export const calculateSummary = (categories: Categories, notes: Note[]) => {
  let summary: SummaryData = {};

  for (const category of categories) {
    summary[category] = {
      name: category,
      active: 0,
      archived: 0,
    };
  }

  notes.forEach((note) => {
    if (note.archived) {
      summary[note.category].archived += 1;
    } else {
      summary[note.category].active += 1;
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
