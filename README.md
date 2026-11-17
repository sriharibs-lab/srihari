# srihari.page

The personal site of Srihari Srinivasa: a short about, and three things I've built with AI (WikiGraph, Nexus, Run Down).

## Stack

One static page. Plain HTML, CSS and a few lines of JavaScript in `index.html`, no framework. Vite builds it to `dist/`, and Vercel serves it.

- Dark by default, with a light theme behind the sun/moon button (remembered per browser).
- Images live in `public/shots/`; the favicon and social card are in `public/`.

## Run locally

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the build
```

## License

MIT. See [LICENSE](LICENSE).
