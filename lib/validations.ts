import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 character").max(130),
  explanation: z.string().min(5, "The question must be at least 5 character"),
  tags: z.array(z.string().min(1).max(15).min(1).max(3)),
});
