# FarmaCare

A web application for pharmacy inventory management, helping pharmacists track medication stock, prescription requirements, and categories in real time.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| name | text | required, max 100 chars |
| in_stock | boolean | toggled from the list, default false |
| prescription_type | fixed values | Reteta, OTC, Supliment |
| category | relation | Analgezice, Antibiotice, Vitamine |
| user | relation | the owner of the item |

Sample data used across all stages:
1. Paracetamol 500mg, active, OTC
2. Amoxicilina 500mg, done, Reteta
3. Nurofen Express, active, OTC

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Stage 1 setup, HTML/CSS layout guidance, README structure |
Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript