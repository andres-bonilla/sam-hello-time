import { htmlStyle } from "./style.js";

export const htmlHead = (title) => 
  `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${htmlStyle}
  </head>`;