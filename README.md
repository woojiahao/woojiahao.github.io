# woojiahao.github.io

Personal site built using Gatsby.js

## Installation

```bash
$ git clone https://github.com/woojiahao/woojiahao.github.io.git
$ cd woojiahao.github.io/
$ yarn global add gatsby-cli
$ yarn install
```

Serve the site locally at `localhost:8000`.

```bash
$ gatsby develop
```

## Media breakpoints

```
420px -> 512px -> 768px -> 1024px
```

## TODO

- [ ] Add hot air balloon that ascends as page is scrolled
- [ ] Wikipedia definition reference balloon on-hover (when a referenced text links to Wikipedia, use the API to get the definition, and display that on the site directly) - retrieve this data before the site is built and store them in the GraphQL
- [X] Hash URLs to minimise footprint or do something about the long URLs
- [ ] Render GitHub gists
- [ ] Blog post thumbnails using Japanese art
- [ ] Side bar within layout

## Technologies

### Tailwind

Uses PostCSS as a CSS parser to parse `main.css` with the custom styles from Tailwind to create the styles.

`extends` will not completely replace all classes in Tailwind while defining the values under `theme` directly will remove all existing classes.