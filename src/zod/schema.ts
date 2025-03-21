import z from "zod";

export const newSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(1, "Title cannot be empty"), // Ensures title is not empty
  body: z.string().min(1, "Body cannot be empty"), // Ensures body is not empty
});
