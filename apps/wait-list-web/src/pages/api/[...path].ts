
import { Hono } from "hono";
import type { APIRoute } from 'astro';
export const prerender = false;
const app = new Hono().basePath("/api");

app.get('/', (c) => c.json({ message: "Welcome to the API root!!" }));

export const ALL: APIRoute = (context) => app.fetch(context.request);
