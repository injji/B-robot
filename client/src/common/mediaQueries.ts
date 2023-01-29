export const breakpoints = {
  mo: 0,
  tab: 768,
  pc: 1200,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
