import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("the company landing page sells the shared universe and its products", async () => {
  const html = await readFile(new URL("public/index.html", root), "utf8");

  assert.match(html, /Every record/);
  assert.match(html, /leaves a legacy/);
  assert.match(html, /The Tópoda Charts Universe/);
  assert.match(html, /Record Label Simulator/);
  assert.match(html, /The Twenty-four Hundreds/);
  assert.match(html, /Welcome to Gaia/);
  assert.match(html, /Hear tomorrow first/);
  assert.match(html, /Fight for every listener/);
  assert.match(html, /href="\/rls"/);
  assert.match(html, /href="\/tth"/);
  assert.doesNotMatch(html, /mailto:|hello@topodacharts\.com/i);
  assert.doesNotMatch(html, /road to mvp|public paper trail|current canon|project layer|active development/i);
});

test("the story page stays immersive and gives readers a concrete hook", async () => {
  const html = await readFile(new URL("public/tth/index.html", root), "utf8");

  assert.match(html, /31 December 2399/i);
  assert.match(html, /Marc Hann/);
  assert.match(html, /invitation he was never supposed to need/i);
  assert.match(html, /A story from Gaia/);
  assert.doesNotMatch(html, /canon|spoiler-safe|branch stabilizes|active development/i);
});

test("Firebase routes the public product paths correctly", async () => {
  const config = JSON.parse(await readFile(new URL("firebase.json", root), "utf8"));
  const redirect = config.hosting.redirects.find(({ source }) => source === "/rls");

  assert.equal(config.hosting.public, "public");
  assert.deepEqual(redirect, {
    source: "/rls",
    destination: "https://record-label-simulator.web.app",
    type: 302,
  });
});
