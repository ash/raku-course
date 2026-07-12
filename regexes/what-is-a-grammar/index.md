---
title: What is a grammar
---

{% include menu.html %}

A single regex is good at recognising one kind of text. But real data — a date, an e-mail address, a whole configuration file — has structure made of many smaller pieces. A _grammar_ is a way to give names to those pieces and combine them into one description.

Before the grammar itself, this section introduces the building block it is made of: the _named regex_. Once you can name a pattern and reuse it, you are ready for the grammar — the next level up. A grammar is more than a tidy collection of named patterns: it binds them into a single, named unit that describes a whole structured format. That is the new quality it brings to regexes — the power to _parse_ a thing as a whole, not merely match one piece of it.

{% include nav.html %}
