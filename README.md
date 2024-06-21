## Overview

The project is to create a number prettifier function that takes a numeric input and returns prettified string format. For millions, billions and trillions, truncate the number, add suffixes as M, B and T respectively. If truncated number is not an integer, then make it to one decimal point.

## Approach:

1. Understand problem description
2. Solution: Come up with number ranges to apply those suffixes for required numbers. A function to do conversion logic.
3. Programming decisions: Typescript for its static typing, to catch errors. Testing - Jest (simple to use)
4. Design Decisions: Function implemented using conditional statements -> Limit Array (more readable, scalable easily)

## Assumptions:

- Handle both postive and negative no's
- If less than M, B and T then just return local formatted value
- If greater than limits specified, return in T format

## Requirement Q:

- Locale formatting allowed?
- Add constant file

## Commands to run the application:

- npm install
- npm run dev
- npm run test
