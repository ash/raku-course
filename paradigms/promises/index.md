---
title: Promises
---

{% include menu.html %}

A _promise_ represents a piece of work that will finish at some point and produce a result (or fail). Promises are the high-level, everyday way to do concurrency in Raku: you start work, get a promise back immediately, and collect the result when you need it.

Unlike raw threads, promises are easy to combine — you can wait for several at once, or chain one onto the result of another. And where a thread only lets you *wait* for the work to finish, awaiting a promise hands you the **value** it produced — and re-throws any error it hit — so you rarely have to pass results around through shared variables yourself. This section covers starting promises, awaiting their results, and putting them together.

{% include nav.html %}
