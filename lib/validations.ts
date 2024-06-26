import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters.").max(130),
  explanation: z
    .string()
    .min(100, "The question must be at least 100 characters."),
  tags: z
    .array(z.string().min(1).max(15))
    .min(1, "Please add at least 1 tag.")
    .max(3),
});

export const AnswerSchema = z.object({
  answer: z.string().min(10),
});

export const ProfileSchema = z.object({
  name: z.string().min(5).max(50),
  username: z.string().min(5).max(50),
  bio: z.string().min(10).max(150),
  portfolioWebsite: z.string().url(),
  location: z.string().min(5).max(50),
});
