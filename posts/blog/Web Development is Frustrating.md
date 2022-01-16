---
published: true
date: "2021-12-21"
title: "Web Development is Frustrating"
tags:
- electron
- webpack
- typescript
- typeorm
- react
- tailwind
- boilerplate
- rant

description: "Working on Apollo has made me realize that web development and the general Javascript ecosystem is
frustrating to work with. This is a rant on trying to understand the multitude of configurations and setup required to
create a web development project in 2021."
---

I have been working with Electron for the past two months or so -- buildilng
[Apollo](https://github.com/woojiahao/apollo) (open-source RSS aggregator). And working with Electron meant I had to
work with the Javascript ecosystem.

And boy is the Javascript ecosystem a confusing beast. From trying to bundle Electron via Webpack, to installing React,
to getting hot reloading to work, everything has been a hassle.

To give even more context, lately, I had finalized the majority of the core functionality of Apollo -- which included
things like adding a new feed, and bookmarking feeds. I wanted to polish the application and so I started to modifying
the styles of the React components. However, as I hadn't setup Electron to allow for hot reloading of the
[renderer](https://www.electronjs.org/docs/latest/tutorial/process-model), it was taking minutes to build and render
the changes. This was not very economical as I could be changing a single text color and have to wait minutes to view
the changes.

So, I did what any sensible developer would do and look for ways to hot reload an Electron app. I stumbled upon
`electron-reloader` and tried it out. No dice. Apparently, it did not work really well with Webpack + React.

So, I tried the next best thing, using a pre-packed Webpack plugin for `electron-reloader`. Again, no dice. The changes
simply were not rendering.

Exasperated, I decided re-writing my Webpack to use `electron-webpack` as it had promised hot reloading out-of-the-box.
But this time, I could not get my existing Webpack configurations to work. `electron-webpack` was simply too abstract
for my liking.

The same happened with `electron-forge`.

Frustrated with the lack of flexibility and documentation for both `electron-webpack` and `electron-forge`, I decided to
roll my own "minimal" Electron setup.

I decided to hardcode the tech stack to be Typescript, React, Tailwind.CSS, and TypeORM. This was the stack that was
already working for me with Apollo and I did not want to rewrite Apollo.

So, I started reading the documentation and looking at various posts about setting up these tools. I cannot express just
how many times I would follow a guide to the tee and have some random error message appear because the tutorial was like
three months old.

*THREE MONTHS*

Only in Javascript will you get breaking changes by following a three-month old article...

I was pulling my hair at the multitude of errors with just setting up Webpack to work with every single technology. The
implementation of Apollo was never a trouble, but the setup was the one giving me the most amount of problems...

Finally, after nearly eight hours of repeated trial and error and constant Google-fu, I finally got the minimal setup
working.

I think this experience really speaks to the almost tragic state of Javascript. Everything is moving so quickly that
three-month old articles can go obsolete. Tools are so abstracted that it's almost impossible to make flexible decisions
without needing to pull everything apart. There are so many tools that perform the same operation but differ ever so
slightly that using one over the other would cause red errors to fill your screen. And yet, we are recommending web
development as a "beginner" domain. Sure, having opinionated tooling can make it easy to start out with -- but staying
within the confines and diction of each opinion can become stifling and frustrating.

Sure this whole process has been eye-opening and has taught me a lot about Webpack and Babel. But maybe it's just me, but
I think that development should be less about confusing setup about standards and more on actually developing a product
that matters. I just feel that time could have been better invested elsewhere if the ecosystem and tooling was a lot more
cohesive and complete.

I know my new "minimal" Electron setup is contributing to the problem, but for me, working with the tools at the most
fundamental level -- away from the abstracted nonsense -- is the easiest way for me to get something working.

![Standards](https://imgs.xkcd.com/comics/standards.png)

In case you are interested, my "minimal" Electron setup can be found [here.](https://github.com/woojiahao/minimal-electron)
