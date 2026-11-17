import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('Centralized Wedding Configuration Integrity', async (t) => {
  const configPath = path.join(ROOT, 'src/config/weddingConfig.ts');
  assert.ok(fs.existsSync(configPath), 'weddingConfig.ts must exist');
  const content = fs.readFileSync(configPath, 'utf8');

  await t.test('Couple names are accurately defined', () => {
    assert.match(content, /groomName:\s*["']VASU["']/, 'Groom name must be VASU');
    assert.match(content, /brideName:\s*["']MERCY HAVILAH["']/, 'Bride name must be MERCY HAVILAH');
  });

  await t.test('Family / Parents details are accurately defined', () => {
    assert.match(content, /groomFather:\s*["']N\.JEPHANIAH["']/, 'Groom father must be N.JEPHANIAH');
    assert.match(content, /groomMother:\s*["']N\.UMA DEVI["']/, 'Groom mother must be N.UMA DEVI');
    assert.match(content, /brideFather:\s*["']S\.DEENA SHEKHAR["']/, 'Bride father must be S.DEENA SHEKHAR');
    assert.match(content, /brideMother:\s*["']S\.ESTHER["']/, 'Bride mother must be S.ESTHER');
  });

  await t.test('Scripture and reference are Mark 10:9', () => {
    assert.match(content, /Therefore what God has joined together, let no one separate\./, 'Must contain Mark 10:9 verse');
    assert.match(content, /Mark 10:9/, 'Must reference Mark 10:9');
  });

  await t.test('Upcoming events contain Ceremony and Reception (No Thanksgiving)', () => {
    assert.match(content, /id:\s*["']ceremony["']/, 'Must have ceremony event');
    assert.match(content, /id:\s*["']reception["']/, 'Must have reception event');
    assert.match(content, /Friends Foundation/i, 'Must have Friends Foundation venue for reception');
    assert.match(content, /Bacharam,\s*Hyderabad/i, 'Must have Bacharam, Hyderabad location for reception');
    assert.match(content, /https:\/\/maps\.app\.goo\.gl\/ekiJgkWFCmETRwWg6/, 'Must contain Google Maps link for reception');
    assert.match(content, /U\.?\s*Joshua\s*Ranjit/i, 'Must contain reception officiant U. Joshua Ranjit');
    assert.match(content, /Pastor\s*Chitti\s*Babu/i, 'Must contain reception chief guest Pastor Chitti Babu');
    assert.doesNotMatch(content, /thanksgiving/i, 'Must NOT contain any Thanksgiving service or event');
  });

  await t.test('Ceremony date, timing and venue are correct', () => {
    assert.match(content, /2027-02-03T09:00:00/, 'Ceremony date must be 3 Feb 2027 9:00 AM');
    assert.match(content, /AB Function Hall \(AC\)/, 'Venue must be AB Function Hall (AC)');
    assert.match(content, /Behind SSGS Degree College,\s*SN Pet,\s*Guntakal/, 'Address must be Behind SSGS Degree College, SN Pet, Guntakal');
    assert.match(content, /https:\/\/maps\.app\.goo\.gl\/V26a9HupTv4vn8A28/, 'Must contain valid Google Maps URL for ceremony');
  });

  await t.test('Engagement is recorded as completed milestone with 16 Feb 2026 date', () => {
    assert.match(content, /id:\s*["']engagement["'][\s\S]*?status:\s*["']completed["']/, 'Engagement must be marked as status: completed');
    assert.match(content, /16\s*Feb(?:ruary)?\s*2026/i, 'Engagement date must be 16 February 2026');
  });

  await t.test('Contact numbers contain all three family numbers with correct designations', () => {
    assert.match(content, /9963541004/, 'Must contain Ranjith phone number');
    assert.match(content, /7989107503/, 'Must contain Prakash phone number');
    assert.match(content, /9059318618/, 'Must contain Akhil phone number');
    assert.match(content, /Ranjith/i, 'Must label Ranjith');
    assert.match(content, /Prakash/i, 'Must label Prakash');
    assert.match(content, /Akhil/i, 'Must label Akhil');
  });

  await t.test('Minister of the ceremony is accurately defined', () => {
    assert.match(content, /heading:\s*["']The Minister of the Ceremony["']/, 'Must define heading: The Minister of the Ceremony');
    assert.match(content, /Solemnization of Marriage/i, 'Must define section heading Solemnization of Marriage');
    assert.match(content, /Rev\.\s*A\.\s*P\.\s*Solomon Vijay Raj/, 'Must define minister name Rev. A. P. Solomon Vijay Raj');
    assert.match(content, /Agape A\.G\.?\s*Church/, 'Must define church Agape A.G. Church');
    assert.match(content, /Pastor\s*S\.\s*Gnana Jaya Prakash/, 'Must define marriage officiant Pastor S. Gnana Jaya Prakash');
    assert.match(content, /Bethlehem Gospel Ministries/i, 'Must define church Bethlehem Gospel Ministries');
    assert.match(content, /Mark 10:9/, 'Must reference Mark 10:9');
  });

  await t.test('All referenced media assets physically exist on disk', () => {
    const mediaFiles = [
      'assets/fonts/Champagne.ttf',
      'assets/images/hero.jpg',
      'assets/images/groom.jpg',
      'assets/images/bride.jpg',
      'assets/images/groom-parents.jpg',
      'assets/images/bride-parents.jpg',
      'assets/images/gallery-1.jpg',
      'assets/images/gallery-2.jpg',
      'assets/images/gallery-3.jpg',
      'assets/images/gallery-4.jpg',
      'assets/images/gallery-5.jpg',
      'assets/images/gallery-6.jpg',
      'assets/images/friends-foundation-family.jpg',
      'assets/music/wedding.mp3',
      'assets/videos/wedding.mp4'
    ];

    for (const relPath of mediaFiles) {
      const fullPath = path.join(ROOT, relPath);
      assert.ok(fs.existsSync(fullPath), `Media file must exist: ${relPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Media file must not be empty: ${relPath} (size: ${stats.size})`);
    }
  });
});
