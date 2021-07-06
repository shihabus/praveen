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
