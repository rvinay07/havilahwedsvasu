import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('Design Tokens & Dual-Theme System Verification', async (t) => {
  const tailwindPath = path.join(ROOT, 'tailwind.config.js');
  const cssPath = path.join(ROOT, 'src/index.css');

  assert.ok(fs.existsSync(tailwindPath), 'tailwind.config.js must exist');
  assert.ok(fs.existsSync(cssPath), 'src/index.css must exist');

  const tailwindContent = fs.readFileSync(tailwindPath, 'utf8');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  await t.test('Light theme tokens match WedBuild palette exact values', () => {
    assert.match(tailwindContent, /#9C8DC1/i, 'Primary Colour / Main #9C8DC1 must exist in tailwind');
    assert.match(tailwindContent, /#B58BC0/i, 'Secondary Colour / Accent #B58BC0 must exist in tailwind');
    assert.match(tailwindContent, /#D3D0DD/i, 'Soft #D3D0DD must exist in tailwind');
    assert.match(tailwindContent, /#F4F4F6/i, 'Neutral / Page Background #F4F4F6 must exist in tailwind');
    assert.match(tailwindContent, /#292532/i, 'Deep / Heading Colour #292532 must exist in tailwind');

    assert.match(cssContent, /--bg-page:\s*#F4F4F6/i, 'CSS --bg-page must use #F4F4F6');
    assert.match(cssContent, /--text-main:\s*#292532/i, 'CSS --text-main must use #292532');
    assert.match(cssContent, /--color-rose:\s*#9C8DC1/i, 'CSS --color-rose must use #9C8DC1');
    assert.match(cssContent, /--color-olive:\s*#B58BC0/i, 'CSS --color-olive must use #B58BC0');
    assert.match(cssContent, /--color-pear:\s*#D3D0DD/i, 'CSS --color-pear must use #D3D0DD');
    assert.match(cssContent, /--color-cream:\s*#F4F4F6/i, 'CSS --color-cream must use #F4F4F6');
    assert.match(cssContent, /--color-plum:\s*#292532/i, 'CSS --color-plum must use #292532');
  });

  await t.test('Midnight Champagne Luxury dark theme tokens are present and exact', () => {
    assert.match(tailwindContent, /#101820/i, 'Main background #101820 must exist');
    assert.match(tailwindContent, /#151F28/i, 'Secondary background #151F28 must exist');
    assert.match(tailwindContent, /#1B2732/i, 'Card background #1B2732 must exist');
    assert.match(tailwindContent, /#24313B/i, 'Elevated surface #24313B must exist');
    assert.match(tailwindContent, /#F1EBDD/i, 'Primary text #F1EBDD must exist');
    assert.match(tailwindContent, /#C1C5C4/i, 'Secondary text #C1C5C4 must exist');
    assert.match(tailwindContent, /#A0AAA9/i, 'Muted text #A0AAA9 must exist');
    assert.match(tailwindContent, /#D6B878/i, 'Champagne gold #D6B878 must exist');
    assert.match(tailwindContent, /#E6CC91/i, 'Gold hover #E6CC91 must exist');
    assert.match(tailwindContent, /#A6B3A1/i, 'Sage accent #A6B3A1 must exist');
    assert.match(tailwindContent, /#34424C/i, 'Border #34424C must exist');
  });

  await t.test('CSS custom properties match Midnight Champagne theme', () => {
    assert.match(cssContent, /\[data-theme="dark"\]/, 'Must declare [data-theme="dark"] selector');
    assert.match(cssContent, /#101820/i, 'CSS dark --bg-page must use #101820');
    assert.match(cssContent, /#1B2732/i, 'CSS dark --bg-card must use #1B2732');
    assert.match(cssContent, /#F1EBDD/i, 'CSS dark --text-main must use #F1EBDD');
    assert.match(cssContent, /#D6B878/i, 'CSS dark --champagne must use #D6B878');
  });
});

