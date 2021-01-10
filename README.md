# woojiahao.github.io

Personal site built using Gatsby.js

## Installation

Install `gatsby-cli` and all other npm dependencies.

```bash
$ npm i -g gatsby-cli
$ npm i
```

Serve the site locally at `localhost:8000`.

```bash
$ gatsby develop
```

## Media breakpoints

Due to the use of CSS Modules, the media breakpoints have to be distributed across three different files:

- `index.module.css` - Layout of the homepage
- `global.css` - All content font sizes
- `layout.module.css` - Layout of every other page within the website
- `project-list.module.css` - Layout of the projects list
- `image-carousel.module.css` - Image carousel 
- `post-navigation.module.css` - Post navigation

Breakpoints go from:

```
420px -> 512px -> 768px -> 1024px
```

## TODO

- [ ] Add hot air balloon that ascends as page is scrolled