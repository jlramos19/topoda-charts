# Tópoda Charts Studios website

Public company and product website for [topodacharts.com](https://topodacharts.com), deployed through Firebase Hosting project `topoda`. Production is the static `public/` tree only; there is no parallel application runtime.

## Current public scope

- Record Label Simulator-led homepage framed by Tópoda Charts Studios
- Record Label Simulator product page at `/record-label-simulator`
- The Twenty-four Hundreds story-layer page at `/the-twenty-four-hundreds`
- Legacy acronym routes retained only as redirects
- No game runtime, account system, database, or download artifact

## Verify

```bash
npm test
```

## Deploy

```bash
firebase deploy --only hosting --project topoda
```

The website is a delivery and information surface only. Record Label Simulator is a native Windows Unity game with local save authority.
