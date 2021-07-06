Setup

1. Setup Vite

```bash
npm init @vitejs/app <app_name> -- --template vanilla
```

This will create a vanilla app with Vite set up

2. Add Tailwind as PostCSS plugin

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p
```

This creates a `tailwind.config.js` and `postcss.config.js`

3. Import Tailwindcss base


```bash
// main.js
import "tailwindcss/tailwind.css"
```

4. Purge unused CSS

```
// tailwind.config.js
module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

5. Run dev server

```bash
yarn dev
```

6. Build the project

This out the project into a `dist` folder.

```bash
yarn build
```

7. Serve build

```bash
yarn serve
```

8. Hosting in [Netlify](https://www.netlify.com/)
  - Make sure the project is pushed into Github
  - Login to Netlify and connect it to your Github account
  - Click **New Site From Git**
  - Choose the GitHub repository
  - Choose the appropriate branch name, rest of the default setting should work fine
  - Click on **Deploy Website**
  - You can customize the domain name too if required from the **Domain Management** tab under settings  