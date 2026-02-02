import "dotenv/config";
// load .env.local

import { Hono } from "hono";
import type { APIRoute } from 'astro';
import { convex, api } from "@creator-lucid/db"

export const prerender = false;
const app = new Hono().basePath("/api");

app.get('/', (c) => c.json({ message: "Welcome to the API root!!" }));

app.post('/waitlist', async (c) => {
    const { email } = await c.req.json();
    // Here you would typically add the email to your waitlist database
    // console.log(`New waitlist signup: ${email}`);
    const userAgent = c.req.header("User-Agent") || "unknown";
    try {
        await convex.mutation(api.mutation.addToWaitlist, { email, userAgent });
        return c.json({ message: `Thank you for joining waitlist, ${email}!` });
    } catch (error) {
        console.log("Error joining waitlist: ", error);
        return c.text("Error joining waitlist", 500);
    }
});

export const ALL: APIRoute = (context) => app.fetch(context.request);
