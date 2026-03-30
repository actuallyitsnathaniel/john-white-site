# Workflow Rules

These apply to every implementation task, no exceptions.

## Before writing code for a new component or library
- Read the actual `.d.ts` type signatures in `node_modules/<pkg>/` — not just the export names, the full parameter and return types
- If the library has multiple variants of a function (e.g. `prepare` vs `prepareWithSegments`), document the distinction before using either

## Before calling any browser API
Canvas, IntersectionObserver, IndexedDB, `window`, `document`, `performance`, etc.:
- Confirm the call lives inside `useEffect`, an event handler, or a `useCallback` only invoked from those — never synchronously in a render function body or at module scope
- React 19 StrictMode runs effects twice in dev — effects must be safe to double-invoke

## Before declaring a task done
Run both of these and confirm they pass with zero errors:
```
npx tsc --noEmit
npm run build
```
A build that compiles is not sufficient — TypeScript errors that Vite ignores will throw at runtime.

## Diagnosing bugs
- Never state "the real problem is X" based on reading code alone
- Required evidence: a stack trace, a thrown error message logged to console, or a failing assertion
- When in doubt: add a `console.error` in the suspected codepath and confirm it fires before claiming root cause

## Smoke-testing new components
Any component that uses a new library or browser API must render correctly in the browser **before** being wired into a route. Confirm it does not throw by checking the browser console. Only then integrate.
