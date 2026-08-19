import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage presents the real studio slate and honest status", async () => {
  const html = await readFile(new URL("public/index.html", root), "utf8");
  assert.match(html, /Tópoda Charts Studios/);
  assert.match(html, /RLSim/);
  assert.match(html, /The Twenty-four Hundreds/);
  assert.match(html, /Gaia/);
  assert.match(html, /No public build is available yet/i);
  assert.match(html, /Experimental Alpha/);
  assert.doesNotMatch(html, /fake countdown|mystery download button/i);
  assert.doesNotMatch(html, />Play RLS|Build your label|Download now/i);
});

test("RLSim page states the current product and delivery boundary", async () => {
  const html = await readFile(new URL("public/rls/index.html", root), "utf8");
  assert.match(html, /Windows-first/);
  assert.match(html, /Unity 6\.5 HDRP/);
  assert.match(html, /0\.1\.0-alpha\.1/);
  assert.match(html, /old browser-game direction is deprecated/i);
  assert.match(html, /No public build is available yet/i);
});

test("TTH page keeps draft-specific material private", async () => {
  const html = await readFile(new URL("public/tth/index.html", root), "utf8");
  assert.match(html, /2399 becomes 2400/);
  assert.match(html, /Not publicly released/);
  assert.doesNotMatch(html, /Marc Hann|invitation he was never supposed to need/i);
});

test("Firebase serves local product pages without the deprecated game redirect", async () => {
  const config = JSON.parse(await readFile(new URL("firebase.json", root), "utf8"));
  assert.equal(config.hosting.public, "public");
  assert.equal(config.hosting.cleanUrls, true);
  assert.equal(config.hosting.trailingSlash, false);
  assert.equal(config.hosting.redirects, undefined);
});
