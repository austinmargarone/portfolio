import { z } from "zod";

const mySchema = z.string();

// parse
mySchema.parse("");
