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
| | Stage 1 setup, HTML/CSS layout guidance, README structure |
Details per stage: see the `ai-log/` folder.


## Stage 2: data logic
Plain JavaScript, no DOM.
`medicamente.js` holds the array and the functions that read and change it. 
Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- MedicamentList receives the whole array and renders one card per item
- MedicamentCard receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.


## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API