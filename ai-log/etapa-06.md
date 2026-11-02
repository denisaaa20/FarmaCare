# Stage 6: AI log

## Tools
- ChatGPT

## Key requests
### 1. Integrating json-server and handling data loading in App.jsx (Step 5)
- Asked: How to load data from `json-server` into `App.jsx` using `useEffect` while handling loading and error states?
- Got: Guidance on setting up `useEffect` in `App.jsx` with an `ignore` flag for cleanup, using `useState` for loading and error handling, and connecting it to `fetchMedicamente`.
- Changed or rejected: Adapted the state variables and function calls to match the `medicamente` domain instead of tasks.

## What I learned / what did not work
I learned how to manage asynchronous data fetching in React using `useEffect` and `async/await` in `App.jsx`.
I implemented state management for loading, success, and error handling so that the application properly displays feedback when the API is loading or unavailable.