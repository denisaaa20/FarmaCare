# Stage 5: AI log

## Tools
- ChatGPT 

## Conversations
- https://chatgpt.com/c/6ac166a2-13f8-83eb-91e5-2cc3f9a89e1e

## Key requests
### 1. Fixing strikethrough logic on checked items
- Asked: How to make the text line-through when the checkbox is checked, because initially it was working in reverse?
- Got: I learned how to adjust the `className` logic in `MedicamentCard.jsx` based on the item's checked state (`in_stock`).
- Changed or rejected: Applied `task-card done` when `in_stock` is true so the text crosses out only when checked.

### 2. Resolving light/dark mode switching
- Asked: How to fix the theme switcher so it toggles properly, because dark mode was being applied in both variants?
- Got: I learned how to handle CSS selector precedence (`:root:not([data-theme="light"])`) and correctly update `dataset.theme` on the root element.
- Changed or rejected: Updated both `App.jsx` and `App.css` to allow smooth switching between light and dark themes.

## What I learned / what did not work

I used AI to help me with the code so that when the checkbox is checked, the text gets crossed out (since initially it was working in reverse).
I also used it for the light/dark mode part, because it was applying dark mode on both variants instead of toggling properly.