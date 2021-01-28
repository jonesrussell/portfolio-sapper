const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.svelte",
    ],
    options: {
      defaultExtractor: (content) => [
        // This is an internal Tailwind function that we're not supposed to be allowed to use
        // So if this stops working, please open an issue at
        // https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template/issues
        // rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
  },
  theme: {
    fontFamily: {
      greeting: ["Dancing Script", "cursive"],
    },
    extend: {
      keyframes: {
        grow: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shrink: {
          "100%": { transform: "scale(1)", opacity: "1" },
          "0%": { transform: "scale(0)", opacity: "0" },
        },
        slideInLeft: {
          "0%": { left: "-24rem", opacity: "0" },
          "100%": { left: "0", opacity: "1" },
        },
      },
      animation: {
        grow: "grow 1s ease-in-out",
        shrink: "shrink 1s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
};
