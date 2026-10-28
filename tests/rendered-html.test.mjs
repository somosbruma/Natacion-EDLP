import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('home renders the eight athletes without tabs, favorites or search', async () => {
  const { default: worker } = await import('../dist/server/index.js');
  const response = await worker.fetch(new Request('http://localhost/', { headers: { accept: 'text/html' } }), { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="es-AR"/);
  assert.match(html, /Seguí a EDELP/);
  assert.match(html, /name="viewport"/);
  assert.equal((html.match(/class="athlete-card"/g) || []).length, 8);
  assert.doesNotMatch(html, /<nav|<input|aria-pressed|Mis nadadores|Buscar por nombre|Ver quiénes nadan/);
  assert.match(html, /escudo-edlp.webp/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test('every entry has its final time and place', async () => {
  const source = await readFile(new URL('../app/athletes.ts', import.meta.url), 'utf8');
  const athletes = JSON.parse(source.split('export const athletes: Athlete[] = ')[1].trim().replace(/;$/, ''));
  assert.deepEqual(athletes.map(a => a.events.map(e => [e.eventNumber, e.result, e.position])), [
    [[3,'8:19.69',6],[9,'3:51.98',7],[17,'3:49.78',6],[29,'1:49.08',8]],
    [[1,'13:09.84',4],[5,'3:07.96',4],[27,'3:51.30',7],[35,'6:26.07',6],[37,'1:48.06',5]],
    [[2,'11:48.87',2],[6,'2:33.46',5],[36,'5:36.06',5]],
    [[5,'3:15.33',16],[11,'1:26.20',23],[15,'38.26',23],[35,'6:59.08',17]],
    [[8,'28.72',6],[12,'1:02.65',12],[16,'27.47',13],[20,'1:10.28',8]],
    [[29,'1:38.23',6],[33,'44.72',5]],
    [[14,'49.06',20],[16,'37.76',29],[34,'48.80',14]],
    [[11,'1:14.34',13],[15,'32.50',14],[17,'3:11.64',8]]
  ]);
});

test('entry dataset matches the 28 entries in the official start lists', async () => {
  const source = await readFile(new URL('../app/athletes.ts', import.meta.url), 'utf8');
  const athletes = JSON.parse(source.split('export const athletes: Athlete[] = ')[1].trim().replace(/;$/, ''));
  assert.deepEqual(athletes.map(a => a.events.length), [4,5,3,4,4,2,3,3]);
  assert.deepEqual(athletes.map(a => a.age), [55,58,58,42,42,56,62,39]);
  assert.equal(athletes[0].name, 'María De La Paz Gibert');
  assert.equal(athletes[7].name, 'Marcela Luciana Tobes');
  assert.deepEqual(athletes.map(a => a.events.map(e => [e.eventNumber,e.seedTime])), [
    [[3,'7:55.00'],[9,'3:50.00'],[17,'3:50.00'],[29,'1:50.00']],
    [[1,'13:39.65'],[5,'3:11.74'],[27,'3:51.32'],[35,'6:36.07'],[37,'1:48.88']],
    [[2,'11:20.00'],[6,'2:20.00'],[36,'5:18.00']],
    [[5,'3:25.00'],[11,'1:34.32'],[15,'41.73'],[35,'7:14.00']],
    [[8,'27.02'],[12,'56.80'],[16,'25.22'],[20,'1:04.00']],
    [[29,'2:40.00'],[33,'1:00.00']],
    [[14,'48.94'],[16,'38.55'],[34,'40.25']],
    [[11,'1:13.76'],[15,'32.91'],[17,'3:20.13']]
  ]);
  const events = athletes.flatMap(a => a.events);
  assert.equal(events.length, 28);
  for (const e of events) {
    assert.match(e.date, /^2026-10-2[1-7]$/);
    assert.match(e.time, /^\d{2}:\d{2}$/);
    assert.ok(Number.isInteger(e.heat) && Number.isInteger(e.heatCount) && e.heat >= 1 && e.heat <= e.heatCount);
    assert.ok(Number.isInteger(e.lane) && e.lane >= 0 && e.lane <= 9);
  }
  const pick = (i, n) => athletes[i].events.find(e => e.eventNumber === n);
  assert.deepEqual(pick(0, 3), { distance: 400, stroke: 'Combinados', eventNumber: 3, seedTime: '7:55.00', date: '2026-10-22', time: '12:32', heat: 4, heatCount: 10, lane: 7, result: '8:19.69', position: 6 });
  assert.deepEqual([pick(5, 33).heat, pick(5, 33).lane, pick(5, 33).time], [8, 9, '12:22']);
  assert.deepEqual([pick(7, 11).heat, pick(7, 11).heatCount, pick(7, 11).date], [20, 27, '2026-10-23']);
});
