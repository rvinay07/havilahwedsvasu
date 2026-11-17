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

  await t.test('Dark theme tokens adapt palette into dark mode values', () => {
    assert.match(tailwindContent, /#191621/i, 'Dark canvas background #191621 must exist');
    assert.match(tailwindContent, /#221E2C/i, 'Dark subtle surface #221E2C must exist');
    assert.match(tailwindContent, /#292532/i, 'Dark card surface #292532 (Deep) must exist');
    assert.match(tailwindContent, /#363142/i, 'Dark elevated surface #363142 must exist');
    assert.match(tailwindContent, /#484157/i, 'Dark border #484157 must exist');
    assert.match(tailwindContent, /#9C8DC1/i, 'Dark primary accent #9C8DC1 (Main) must exist');
    assert.match(tailwindContent, /#B58BC0/i, 'Dark secondary accent #B58BC0 (Accent) must exist');
    assert.match(tailwindContent, /#F4F4F6/i, 'Dark primary text #F4F4F6 (Neutral) must exist');
    assert.match(tailwindContent, /#D3D0DD/i, 'Dark secondary text #D3D0DD (Soft) must exist');
  });

  await t.test('CSS custom properties match Lavender Deep dark theme', () => {
    assert.match(cssContent, /\[data-theme="dark"\]/, 'Must declare [data-theme="dark"] selector');
    assert.match(cssContent, /--bg-page:\s*#191621/i, 'CSS dark --bg-page must use #191621');
    assert.match(cssContent, /--bg-card:\s*#292532/i, 'CSS dark --bg-card must use #292532');
    assert.match(cssContent, /--text-main:\s*#F4F4F6/i, 'CSS dark --text-main must use #F4F4F6');
    assert.match(cssContent, /--champagne:\s*#9C8DC1/i, 'CSS dark --champagne must use #9C8DC1');
    assert.match(cssContent, /--sage-accent:\s*#B58BC0/i, 'CSS dark --sage-accent must use #B58BC0');
  });
});

