// Every language's chat answers in one file. The chat fetches it the first time it opens,
// so it can understand a question typed in any of the six languages, whatever page you are on.
import type { APIRoute } from 'astro';
import { locales } from '../i18n';
import { chatBundle } from '../lib/chat';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(Object.fromEntries(locales.map((l) => [l, chatBundle(l)]))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
