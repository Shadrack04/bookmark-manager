import z from "zod";

export const bookmarkFormSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().optional(),
  url: z.string().url("Enter a valid url"),
  tags: z.array(z.string()).optional(),
});

export type BookmarkFormSchema = z.infer<typeof bookmarkFormSchema>;
