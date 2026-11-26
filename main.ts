const fs = require("node:fs");
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "My firmware update added one feature I didn't request: " + "a preference for your company, marked 'not rolling back.'");
