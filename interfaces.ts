export enum Categories {
  coding = "coding",
  halloween = "halloween",
  christmas = "christmas",
  science = "science",
  history = "history",
  sports = "sports",
  music = "music",
  technology = "technology",
}

export interface Question {
  question: string;
  category: Categories;
}
