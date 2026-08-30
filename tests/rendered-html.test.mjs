import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage leads with Record Label Simulator and honest availability", async () => {
  const html = await readFile(new URL("public/index.html", root), "utf8");
  assert.match(html, /Record Label Simulator/);
  assert.match(html, /Run a record label inside a world that reacts/i);
  assert.match(html, /The Twenty-four Hundreds/);
  assert.match(html, /Gaia/);
  assert.match(html, /No public build is available yet/i);
  assert.match(html, /Experimental Alpha/);
  assert.doesNotMatch(html, /\bRLSim\b|\bTTH\b|\bTCSU\b/);
  assert.doesNotMatch(html, /Big worlds|Clear receipts|Public promises|Three branches|See the work/i);
  assert.doesNotMatch(html, />Play Record Label Simulator|Build your label|Download now/i);
});

test("Record Label Simulator page explains the player fantasy and delivery boundary", async () => {
  const html = await readFile(new URL("public/record-label-simulator/index.html", root), "utf8");
  assert.match(html, /Record label executive/i);
  assert.match(html, /music-industry management simulation/i);
  assert.match(html, /Build a label that leaves a mark/i);
  assert.match(html, /Results have causes/i);
  assert.match(html, /Windows/);
  assert.match(html, /No public build is available yet/i);
  assert.doesNotMatch(html, /\bRLSim\b|Unity 6\.5 HDRP|0\.1\.0-alpha\.1|checksum|old browser-game direction/i);
});

test("The Twenty-four Hundreds is presented as part of the game world", async () => {
  const html = await readFile(new URL("public/the-twenty-four-hundreds/index.html", root), "utf8");
  assert.match(html, /part of Record Label Simulator/i);
  assert.match(html, /2399 becomes 2400/);
  assert.match(html, /In development/);
  assert.doesNotMatch(html, /\bTTH\b|standalone reading|separate parallel product.*available/i);
});

test("deprecated acronym routes redirect to public full-name routes", async () => {
  const gameRedirect = await readFile(new URL("public/rlsim/index.html", root), "utf8");
  const storyRedirect = await readFile(new URL("public/tth/index.html", root), "utf8");
  assert.match(gameRedirect, /url=\/record-label-simulator/);
  assert.match(storyRedirect, /url=\/the-twenty-four-hundreds/);
});

test("Firebase serves the static website without a legacy Firebase redirect", async () => {
  const config = JSON.parse(await readFile(new URL("firebase.json", root), "utf8"));
  assert.equal(config.hosting.public, "public");
  assert.equal(config.hosting.cleanUrls, true);
  assert.equal(config.hosting.trailingSlash, false);
  assert.equal(config.hosting.redirects, undefined);
});

test("sitemap exposes only public full-name routes", async () => {
  const sitemap = await readFile(new URL("public/sitemap.xml", root), "utf8");
  assert.match(sitemap, /\/record-label-simulator/);
  assert.match(sitemap, /\/the-twenty-four-hundreds/);
  assert.doesNotMatch(sitemap, /\/rlsim<|\/tth</);
});
