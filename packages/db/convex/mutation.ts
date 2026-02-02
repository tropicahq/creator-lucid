import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addToWaitlist = mutation(
    {
        args: { email: v.string(), userAgent: v.string() },
        handler: async ({ db }, { email, userAgent }) => {
            // Get the current highest position in the waitlist
            const highestPositionDoc = await db
                .query("wait_list")
                .order("desc")
                .first();

            const newPosition = highestPositionDoc
                ? highestPositionDoc.position + 1
                : 1;

            // Add the new email to the waitlist with the next position
            await db.insert("wait_list", {
                position: newPosition,
                email,
                user_agent: userAgent,
            });

            return { position: newPosition };
        }
    }
);