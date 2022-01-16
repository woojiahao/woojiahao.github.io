---
published: false
date: "2021-11-29"
title: "Grokking RSS — Understanding the File Format"
tags:
- rss
- explanation
- computer science
- file format
- data
- web specification
- xml
- rss aggregator

description: "To develop Apollo — my open-source RSS aggregator — I have had to understand the RSS file specification in
order to better utilize it. This article explores the various details about RSS."
---

As I continue working on [Apollo](https://github.com/woojiahao/apollo) — my open-source RSS aggregator — I thought it
would be nice to make a pitstop here to talk about the RSS specification. I would also like to dive into how RSS
aggregators like Apollo implement and use this specification.

## What is RSS?

RSS, or **R**eally **S**imple **S**yndication, is a web content syndication format.

Syndication -- in general terms -- refers to 
