// Content rules for every language. The build stops if any rule fails.
// 1. No em dash or en dash.  2. No common machine-written phrases in English.
// 3. Every language file has the same keys and list lengths as English.
// 4. Script checks: Romanian comma-below letters, Sorani Kurdish letters, no Turkish letters in Kurmanji.
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('..', import.meta.url));
const locales = ['en', 'bg', 'ro', 'tr', 'ku', 'ckb'];
const errors = [];

async function loadDict(l) {
  const src = await readFile(`${root}src/i18n/${l}.ts`, 'utf8');
  const out = ts.transpileModule(src.replace(/^import type .*$/m, ''), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText;
  return (await import(`data:text/javascript;base64,${Buffer.from(out).toString('base64')}`)).default;
}

const banned = [
  'navigate', 'navigating', 'seamless', 'journey', 'tailored', 'empower', 'delve', 'unlock', 'elevate', 'robust',
  "whether you're", 'whether you are', "in today's", 'we understand that', 'look no further', 'cutting-edge',
  'game-changer', 'leverage', 'holistic', 'one-stop', 'rest assured', 'peace of mind', 'world-class', 'bespoke',
  'tapestry', 'testament', 'in the realm', 'embark', 'it is important to note', 'furthermore', 'moreover',
];

const rules = {
  all: [[/[–—]/, 'en or em dash']],
  ro: [[/[şţŞŢ]/, 'Romanian cedilla letter (use comma below)']],
  ckb: [[/[يكة]/, 'Arabic letter in Sorani (use Kurdish ی ک)']],
  ku: [[/[ığ]/, 'Turkish letter in Kurmanji']],
};

function walk(node, path, cb) {
  if (typeof node === 'string') return cb(path, node);
  if (Array.isArray(node)) return node.forEach((v, i) => walk(v, `${path}[${i}]`, cb));
  if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) walk(v, path ? `${path}.${k}` : k, cb);
}

function shape(node) {
  if (typeof node === 'string') return 's';
  if (Array.isArray(node)) return `[${node.map(shape).join(',')}]`;
  return `{${Object.keys(node).map((k) => `${k}:${k === 'keywords' ? 'kw' : shape(node[k])}`).join(',')}}`;
}

function checkText(locale, where, text) {
  for (const [re, msg] of [...rules.all, ...(rules[locale] ?? [])]) if (re.test(text)) errors.push(`${locale} ${where}: ${msg}`);
  if (locale === 'en') {
    const lower = text.toLowerCase();
    for (const b of banned) if (new RegExp(`\\b${b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(lower)) errors.push(`en ${where}: avoid "${b}"`);
  }
  if (/!/.test(text) && !/^https?:/.test(text)) errors.push(`${locale} ${where}: exclamation mark`);
}

const en = await loadDict('en');
const enShape = shape(en);
for (const l of locales) {
  let dict;
  try { dict = l === 'en' ? en : await loadDict(l); } catch (e) { errors.push(`${l}: cannot load dictionary (${e.message})`); continue; }
  if (shape(dict) !== enShape) errors.push(`${l}: keys or list lengths differ from English`);
  walk(dict, '', (p, v) => checkText(l, p, v));
  // ids, intents and links must not be translated
  dict.services?.items?.forEach((it, i) => it.id !== en.services.items[i].id && errors.push(`${l}: services.items[${i}].id changed`));
  dict.bot?.intents?.forEach((it, i) => (it.id !== en.bot.intents[i].id || it.link !== en.bot.intents[i].link) && errors.push(`${l}: bot.intents[${i}] id or link changed`));
  dict.bot?.chips?.forEach((c, i) => c.intent !== en.bot.chips[i].intent && errors.push(`${l}: bot.chips[${i}].intent changed`));
}

// Blog posts
const blogRoot = `${root}src/content/blog`;
for (const l of await readdir(blogRoot)) {
  for (const f of await readdir(`${blogRoot}/${l}`)) {
    const text = await readFile(`${blogRoot}/${l}/${f}`, 'utf8');
    text.split('\n').forEach((line, i) => {
      if (!line.trim() || line.trim().startsWith('- {')) return;
      checkText(l, `${l}/${f}:${i + 1}`, line.replace(/\(https?:[^)]+\)/g, ''));
    });
  }
}

if (errors.length) {
  console.error(`Content check failed (${errors.length}):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`Content check passed for ${locales.length} languages.`);
