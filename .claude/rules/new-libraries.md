# Introducing New Libraries

Follow this checklist every time a new npm package is installed. Do not skip steps.

## Checklist

**1. Read the type signatures before writing any call**
```
cat node_modules/<pkg>/dist/*.d.ts
# or
cat node_modules/<pkg>/index.d.ts
```
Confirm: parameter types, return types, overloads. If a function has multiple variants (e.g. `prepare` vs `prepareWithSegments`), write down the difference before proceeding.

**2. Check for browser-context requirements**
Does the library touch `window`, `document`, `canvas`, `navigator`, or any DOM API at import time or when its main functions are called? If yes:
- It cannot be called at module scope
- It cannot be called synchronously in a React render function
- It must be called inside `useEffect`, an event handler, or after explicit DOM readiness

**3. Verify the import doesn't throw in isolation**
```js
// quick node check (won't have browser APIs but confirms module loads)
node --input-type=module -e "import('pkg').then(m => console.log(Object.keys(m)))"
```

**4. Add a gotcha entry to `stack.md`**
Before integrating the library into any component, add a section to `.claude/rules/stack.md` documenting:
- The correct call pattern
- Any type distinctions between similar-looking functions
- Any environment requirements (browser-only, canvas required, etc.)

**5. Smoke-test in isolation**
Render the new component standalone (e.g. on a throwaway route or in a `useEffect` console.log) and confirm it works in the browser with no console errors before wiring it into a real route.
