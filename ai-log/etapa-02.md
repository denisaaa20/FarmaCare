# Stage 2: AI log

## Tools
- ChatGPT

## Conversations
- https://chatgpt.com/c/6ac166a2-13f8-83eb-91e5-2cc3f9a89e1e

## Key requests

### 1. Step-by-step logic for searching medications (Step 5)
- Asked: How should my script look for step 5 (`function cautaDupaTitlu(lista, text)`) and can you explain it step by step?
- Got: I learned how to use `.toLowerCase()` on both the text and medication titles, and how to filter the list using `.includes()`.
- Changed or rejected: I kept the search function case-insensitive so it works with any upper or lower case input.

### 2. Validating medication tags (Step 6)
- Asked: How do I check if the label exists in `TIPURI_ELIBERARE = ["otc", "reteta", "supliment"]` for Step 6?
- Got: I learned how to use `!TIPURI_ELIBERARE.includes(eticheta)` inside an `if` condition to show an error message when the tag is invalid.
- Changed or rejected: I added a `console.error` message and made the function return the unchanged list when validation fails.

### 3. Understanding data testing vs interface display
- Asked: I added Aspirin in the console tests, should it appear on the website interface or only in the console?
- Got: I learned that in Stage 2 all operations run in memory and are tested in the browser console, while DOM rendering will be done in Stage 3.
- Changed or rejected: I kept the static HTML interface intact and verified all data manipulations purely via `console.log`.

## What I learned / what did not work

I wrote the core data structure and function setups independently.
I used ai strictly for clarification on JavaScript array methods (`.includes()`, `.toLowerCase()`) and for confirming how testing works in the browser console.
I learned how to write validation logic for new array items without mutating the original data array.
At first, I expected added items like Aspirin to show up directly on the page, but I understood that UI rendering is reserved for the next stage.