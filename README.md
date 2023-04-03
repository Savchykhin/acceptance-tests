# Guide to Cypress e2e Tests

## Contents

-   [Getting Started](#getting-started)
-   [Tooling](#tooling)

## Getting Started

-   Q: How do I install Cypress?

    A: Cypress should be installed along with everything else when you run `npm install`.

-   Q: How do I run Cypress tests?

    A: You can run Cypress with npm scripts `cy:open` and `cy:run`.

## Tooling

### ESLint

EsLint config in `/cypress/.eslintrc.js` extends `eslint:recommended`, `plugin:cypress/recommended`, `plugin:chai-friendly/recommended`,
and `prettier`. Lint check is configured to run on every commit with Husky pre-commit hook.