---
title: Raku vs. Rakudo
---

{% include menu.html %}

**Raku** is the name of the programming language, while **Rakudo** is the name of the compiler.

Rakudo is the compiler that we are going to use in this course. It is using a virtual machine called MoarVM. You get it automatically when installing Rakudo.  It is also possible to build Rakudo on top of other virtual machines, but in this course, we will not dig into these differences.

## Other compilers

The design of Raku does not dictate which compiler to use. The design documents come with a set of test cases called Roast. You can implement your own compiler, and if it passes the tests, you can call it a Raku compiler. Rakudo is currently the most advanced and production-ready tool.

## External links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
