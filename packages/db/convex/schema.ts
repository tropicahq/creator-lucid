// NOTE: You can remove this file. Declaring the shape
// of the database is entirely optional in Convex.
// See https://docs.convex.dev/database/schemas.

import { defineEnt, defineEntSchema, getEntDefinitions } from "convex-ents";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema(
  {
    // documents: defineEnt({
    //   fieldOne: v.string(),
    //   fieldTwo: v.object({
    //     subFieldOne: v.array(v.number()),
    //   }),
    // }),
    wait_list: defineTable({
      position: v.number(),
      user_agent: v.string(),
      email: v.string(),
      // createdAt: v.string(),
    }).index("by_email", { fields: ["email"], staged: true }),
  },
  // If you ever get an error about schema mismatch
  // between your data and your schema, and you cannot
  // change the schema to match the current data in your database,
  // you can:
  //  1. Use the dashboard to delete tables or individual documents
  //     that are causing the error.
  //  2. Change this option to `false` and make changes to the data
  //     freely, ignoring the schema. Don't forget to change back to `true`!
  { schemaValidation: true }
);
export default schema

export const entDefinitions = getEntDefinitions(schema);

