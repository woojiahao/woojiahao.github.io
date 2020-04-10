# woojiahao.github.io

Personal site built using Gatsby.js

## Why split up the repositories?

When using the `gh-pages` package, the contents of the `master` branch will be wiped when we are publishing the 
web page. This means that whenever a change is to be merged into the `master` branch, it is impossible to do so since
we do not have the file in the `master` branch.

Splitting the repositories allow the primary page to store the contents of the `gatsby build` without halting the 
development of the pages.

## TODO

- [X] Display navigation bar at the bottom of each post
- [ ] Add "Back" button when in post
- [ ] Add dark theme
- [ ] Add post navigation
- [ ] Add tag system for blog posts
- [ ] Add pagination for blog and project list
- [ ] Use fragments to organise queries
- [ ] Render the markdown files of each project in the project listing?
