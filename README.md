<h1 align="center">🌐 @jonesrussell42 Portfolio</h1>

## ❓ What is this?

The site that builds from this repository can be found [here](https://fir-sapper-tailwindcss.web.app/).

This is an extremely opinionated Sapper project base intended for my own use. That being said, there is quite a bit of work put into it to make it generalized and adaptable to your own setup, given that you want to use _most_ of these things. The lower something is on this list, the easier it is to reconfigure or remove:

- [Sapper for Svelte](https://sapper.svelte.dev/)
  - [Official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [TypeScript](https://www.typescriptlang.org/)
  - Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
- [PostCSS](https://postcss.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
    - [Official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [postcss-import](https://github.com/postcss/postcss-import)
  - [PurgeCSS](https://www.purgecss.com/)
  - [CSSNano](https://cssnano.co/)
  - Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
- [GitHub Actions](https://github.com/features/actions)
  - Automatic building and deployment to X, triggered on commits to `main` or `master`
- [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) best practices set up
  - [`manifest.json`](https://developer.mozilla.org/en-US/docs/Web/Manifest)'s most important fields filled out
  - High [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit score
- [ESLint](https://eslint.org/)
  - [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - `eslint:fix` package script

## 🧭 Project Status

Sapper is going to change.

Until `create-svelte` and `@sveltejs/kit` are ready, **this project base will continue to be maintained**.

But, once we move on, I won't be creating project bases (templates / boilerplates) anymore. Instead, you'll apply presets onto the default template like this:

```sh
npm init svelte@next  # Use the official template from create-svelte

npx use-preset babichjacob/svelte-add-typescript  # Apply the changes to set up TypeScript for create-svelte
npx use-preset babichjacob/svelte-add-typegraphql  # Apply the changes to set up TypeGraphQL for create-svelte as long as TypeScript is already set up

npx use-preset babichjacob/svelte-add-postcss  # Apply the changes to set up PostCSS for create-svelte
npx use-preset babichjacob/svelte-add-tailwindcss  # Apply the changes to set up Tailwind CSS for create-svelte as long as PostCSS is already set up

# Remember, the above are hypothetical commands and the real ones might look and work different
```

### ⬇️ Install Dependencies

You need to be using version 12 or higher of Node; the `package.json` `engines` field only specifies `10` for Cloud Functions for Firebase.

```sh
cd portfolio-sapper
npm install  # npm also works
```

## 🛠 Usage

### 🧪 Development

```sh
npm run dev
```

### 🔥 Deployment to x

This will create a production build for you before deploying.

```sh
npm run deploy
```

### 🔨 Testing Production Builds Locally

```sh
npm run prod
npm run start
```

### ⚡ Web app

Many of the fields in `static/manifest.json` (`short_name`, `name`, `description`, `categories`, `theme_color`, and `background_color`) are filled with demonstrative values that won't match your site. Similarly, you've got to take new screenshots to replace the included `static/screenshot-1.png` and `static/screenshot-2.png` files. If you want, you can add [app shortcut definitions for "add to home screen" on Android](https://web.dev/app-shortcuts/#define-app-shortcuts-in-the-web-app-manifest). Once you change `theme_color`, update the `meta name="theme-color"` tag in `src/template.html` to match.

The [Apple touch icon](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), favicon, and `logo-` files (also all in the `static` directory) are created by placing the logo within a "safe area" centered circle that takes up 80% of the canvas's dimension. For instance, the constraining circle in `logo-512.png` is 512 × 0.80 = 409.6 ≈ 410 pixels wide and tall.

### 🗺 Source maps

This project base comes with [source maps](https://blog.teamtreehouse.com/introduction-source-maps) enabled during development and disabled during production for the best compromise between performance and developer experience. You can change this behavior through the `sourcemap` variable in `rollup.config.js`.


## 📄 License

MIT

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
