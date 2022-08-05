#!/usr/bin/env node

import gradient from "gradient-string";

console.clear();

// http://patorjk.com/software/taag/
// ANSI Shadow
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
