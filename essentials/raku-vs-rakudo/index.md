---
title: Raku vs. Rakudo and Raku++
---

{% include menu.html %}

**Raku** is the name of the programming language, while a **compiler** is the program that reads your code and runs it. Raku is not tied to a single compiler: this course uses **Rakudo**, the established and most complete one, and there is also a newer compiler called **Raku++**.

## More than one compiler

The design of Raku does not dictate which compiler to use. The design documents come with a set of test cases called Roast; anyone can write a compiler, and if it passes those tests, it is a Raku compiler.

For a long time Rakudo was the only mature implementation, but that is no longer the case. In July 2026 a second compiler appeared — **Raku++** (its executable is called `rakupp`), written in C++. It is young and does not yet cover the whole language, but it already passes a large part of the Roast suite and starts up remarkably fast. This course uses Rakudo for its examples, yet what you are learning is the Raku language itself, and much of it runs unchanged on Raku++ too. The following pages look at each compiler — Rakudo and Raku++ — in turn, and how to install them.

## External links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ on GitHub](https://github.com/ash/rakupp)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
