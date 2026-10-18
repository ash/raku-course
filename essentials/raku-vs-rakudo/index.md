---
title: Raku vs. Rakudo and Raku++
---

{% include menu.html %}

**Raku** is the name of the programming language, while a **compiler** is the program that reads your code and runs it. Raku is not tied to a single compiler: this course uses **Rakudo**, the established one, and there are newer ones too — **Raku++** and **mutsu**.

## More than one compiler

The design of Raku does not dictate which compiler to use. The design documents come with a set of test cases called Roast; anyone can write a compiler, and if it passes those tests, it is a Raku compiler.

For a long time Rakudo was the only mature implementation, but that is no longer the case. In July 2026 a second compiler appeared — **Raku++** (its executable is called `rakupp`), written in C++. Its version 5.4.1 passes the whole Roast suite, and it starts up remarkably fast. This course uses Rakudo for its examples, yet what you are learning is the Raku language itself, and almost all of it runs unchanged on Raku++ too. The following pages look at these two compilers — Rakudo and Raku++ — in turn, and how to install them.

There is a third implementation as well: **mutsu**, an interpreter written in Rust by Tokuhiro Matsuno. It compiles Raku to bytecode for a virtual machine of its own, and it also runs inside a web browser through WebAssembly — its website has a Raku tutorial and a playground built on it. mutsu is under active development and, in its author’s words, not yet suitable for production use, though it already passes nearly all of the Roast test files.

## External links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ on GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
