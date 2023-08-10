import { Schema, model, models } from "mongoose";

export const JournalSchema = new Schema({
  date: Date,
  journal: String,
});

const Journal = models?.Journal || model("Journal", JournalSchema);
export default Journal;
