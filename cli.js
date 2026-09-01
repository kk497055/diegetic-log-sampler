#!/usr/bin/env node
import { generateLog } from "./index.js";

const args = process.argv.slice(2);
const readOption = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

try {
  console.log(generateLog({
    seed: readOption("--seed", "4519"),
    setting: readOption("--setting", "scifi")
  }));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

