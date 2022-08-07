#!/usr/bin/env node

import gradient from "gradient-string";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const log = async (s, delay = 160, randomized = true) => {
  for (const c of s) {
    process.stdout.write(c);
    await sleep((randomized ? Math.random() : 1) * delay);
  }
  process.stdout.write("\n");
};

console.clear();

console.log(
  gradient.rainbow.multiline(`
  ████████╗██╗   ██╗ █████╗ ██╗     ██╗███╗   ██╗ ██╗██╗  ██╗
  ╚══██╔══╝██║   ██║██╔══██╗██║     ██║████╗  ██║███║██║  ██║
     ██║   ██║   ██║███████║██║     ██║██╔██╗ ██║╚██║███████║
     ██║   ██║   ██║██╔══██║██║     ██║██║╚██╗██║ ██║╚════██║
     ██║   ╚██████╔╝██║  ██║███████╗██║██║ ╚████║ ██║     ██║
     ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═╝     ╚═╝
`)
);

console.log(
  gradient.vice(
    [
      "          Email: t@dzaaaaaa.com",
      "            Web: https://dzaaaaaa.com",
      "         Github: https://github.com/Tualin14",
      "       bilibili: https://space.bilibili.com/403504801",
    ].join("\n")
  )
);

log(`
Hi, I'm Tualin14(dzaaaaaa).
You can contact me via the link above.

`);
