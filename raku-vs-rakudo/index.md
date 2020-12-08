# Raku vs. Rakudo

Raku is the name of the programming language, while Rakudo is the name of the compiler.

Rakudo is the compiler that we are going to use in this course. Rakudo is using a virtual machine called MoarVM. You get it automatically when installing Rakudo. It is also possible to build Rakudo on other vitrual machines, but in this course, we are not going to dig into these differences.

## Other compilers

The design of Raku does not dictate which compiler to use. The design documents come with a set of test cases called [Roast](https://github.com/Raku/roast). You can implement your own compiler and if it passes the tests, you can call it a Raku compiler. Rakudo is currently the most developed and production-ready tool.

## Links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)