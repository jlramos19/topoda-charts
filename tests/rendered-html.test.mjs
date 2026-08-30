import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage leads with Record Label Simulator and honest availability", async () => {
  const html = await readFile(new URL("public/index.html", root), "utf8");
  assert.match(html, /Record Label Simulator/);
  assert.match(html, /Run the label/i);
  assert.match(html, /Shape the charts/i);
  assert.match(html, /Gaia/);
  assert.match(html, /No public build is available yet/i);
  assert.match(html, /Experimental Alpha/);
  assert.doesNotMatch(html, /Big worlds|Clear receipts|Public promises|Three branches/i);
  assert.doesNotMatch(html, />Play Record Label Simulator|Build your label|Download now/i);
});

test("Record Label Simulator page explains the player fantasy and delivery boundary", async () => {
  const html = await readFile(new URL("public/rlsim/index.html", root), "utf8");
  assert.match(html, /Record label executive/i);
  assert.match(html, /music-industry management simulation/i);
  assert.match(html, /Build a label that leaves a mark/i);
  assert.match(html, /From talent to legacy/i);
  assert.match(html, /Windows/);
  assert.match(html, /No public build is available yet/i);
  assert.doesNotMatch(html, /Unity 6\.5 HDRP|0\.1\.0-alpha\.1|checksum|old browser-game direction/i);
});

test("The Twenty-four Hundreds is presented as part of the game world", async () => {
  const html = await readFile(new URL("public/tth/index.html", root), "utf8");
  assert.match(html, /Part of Record Label Simulator/i);
  assert.match(html, /2399 becomes 2400/);
  assert.match(html, /In development/);
  assert.doesNotMatch(html, /standalone reading|separate parallel product.*available/i);
});

test("Firebase serves local product pages without the deprecated game redirect", async () => {
  const config = JSON.parse(await readFile(new URL("firebase.json", root), "utf8"));
  assert.equal(config.hosting.public, "public");
  assert.equal(config.hosting.cleanUrls, true);
  assert.equal(config.hosting.trailingSlash, false);
  assert.equal(config.hosting.redirects, undefined);
});

test("public website copy avoids retired RLS naming and route", async () => {
  const paths = [
    "public/index.html",
    "public/rlsim/index.html",
    "public/tth/index.html",
    "public/sitemap.xml",
  ];
  const staleName = ["R", "L", "S"].join("");
  const staleRoute = ["/", "r", "l", "s"].join("");

  for (const path of paths) {
    const source = await readFile(new URL(path, root), "utf8");
    assert.doesNotMatch(source, new RegExp(`\\b${staleName}\\b`));
    assert.doesNotMatch(source, new RegExp(`${staleRoute}(?:[\"'<\\s]|$)`));
  }
});
