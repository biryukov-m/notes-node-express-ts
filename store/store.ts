export const INITIAL_CATEGORIES = ["Task", "Random thought", "Idea"];

export const INITIAL_NOTES = [
  {
    id: 0,
    date: "April 2, 2021",
    title: "Invention idea",
    text: "If i can find out how to do that thing",
    category: INITIAL_CATEGORIES[0],
    dates: "",
    archived: false,
  },
  {
    id: 1,
    date: "April 5, 2021",
    title: "The theory of evolution",
    text: "What if dinosaurs was",
    category: INITIAL_CATEGORIES[0],
    dates: "12/20/2012, 01/01/2022",
    archived: false,
  },
  {
    id: 2,
    date: "April 7, 2021",
    title: "Shopping list",
    text: "Tomatoes, bread",
    category: INITIAL_CATEGORIES[1],
    dates: "12/20/2012",
    archived: false,
  },
  {
    id: 3,
    date: "April 7, 2021",
    title: "Invention idea",
    text: "If i can find out how to do that thing",
    category: INITIAL_CATEGORIES[1],
    dates: "",
    archived: false,
  },
  {
    id: 4,
    date: "April 9, 2021",
    title: "The theory of evolution",
    text: "What if dinosaurs was",
    category: INITIAL_CATEGORIES[2],
    dates: "12/20/2012, 01/01/2022",
    archived: false,
  },
  {
    id: 5,
    date: "April 20, 2021",
    title: "Shopping list",
    text: "Tomatoes, bread",
    category: INITIAL_CATEGORIES[2],
    dates: "12/20/2012",
    archived: false,
  },
  {
    id: 6,
    date: "April 2, 2021",
    title: "Invention idea",
    text: "If i can find out how to do that thing",
    category: INITIAL_CATEGORIES[2],
    dates: "",
    archived: true,
  },
];

export type Category = typeof INITIAL_CATEGORIES[0];
export type Categories = typeof INITIAL_CATEGORIES;
export type Note = typeof INITIAL_NOTES[0];
export type Notes = Array<Note>;
