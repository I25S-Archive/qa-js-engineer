# Assignment

This assignment is an emulation of an actual JS QA Engineer task. 

It's simplified, thus more tedious, but still, there are many ways to solve the problem. We are evaluating your ability to write efficient code, that is easy to read and maintain.

The task can be done in one iteration in less than 30 minutes.

## Description

Create `test.js` that will run `program.js` with different params, measure performance, and log results in a structured way.

## Acceptance Criteria

1. After each run, the logs must be stored in `./out/run-<number>/config-<number>.txt`
1. Each run, `test.js` should execute `program.js` in 3 configurations, in parallel:
 - `./program.js 50 50` -> `config-1.txt`
 - `./program.js 30 75` -> `config-2.txt`
 - `./program.js 90 10` -> `config-3.txt`
1. Each log file must contain:
 - Configuration arguments (command);
 - Execution time;
 - Logs and exceptions from `program.js`;
1. After `test.js` execution, it should log to the **console** cumulative time it took to run the test.

### Limitations
- You are only allowed to use Node.js API, no dependencies allowed;
- Prefer non-blocking Node.js API;
- Prefer promises over callbacks;