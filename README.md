# Tópoda Charts Studios website

Public company and product website for [topodacharts.com](https://topodacharts.com), deployed through Firebase Hosting project `topoda`. Production is the static `public/` tree only; there is no parallel application runtime.

## Current public scope

- Tópoda Charts Studios company and portfolio landing page
- RLSim current-status page at `/rls`
- The Twenty-four Hundreds public-premise page at `/tth`
- No game runtime, account system, database, or download artifact

## Verify

```bash
npm test
```

## Deploy

```bash
firebase deploy --only hosting --project topoda
```

The website is a delivery and information surface only. RLSim is a native Windows Unity game with local save authority.
