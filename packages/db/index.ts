export * from "./convex/_generated/api"
// export * from "./convex/_generated/dataModel"
export * from "./convex/_generated/server"
// export * as mutations from "./convex/mutation"

import { ConvexHttpClient } from "convex/browser";
export const convex = new ConvexHttpClient(import.meta.env.CONVEX_URL);