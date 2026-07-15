---
title: The Rakudo compiler
---

{% include menu.html %}

**Rakudo** is the reference implementation of Raku and the compiler this course uses. It is the most complete and battle-tested way to run Raku today, so when people say “the Raku compiler” they usually mean Rakudo.

Rakudo is itself written largely in Raku, together with a smaller bootstrapping language called NQP (“Not Quite Perl”). It compiles your program to bytecode and runs it on a virtual machine called **MoarVM**, which you get automatically when you install Rakudo. Because Rakudo aims to cover the whole language, it is the safest choice when you need every corner of Raku to work.

Rakudo implements Raku 6.d and is released often, so fixes and new features reach you quickly.

## The virtual machine

By default Rakudo runs on MoarVM, a virtual machine built specifically for Raku. The design does not tie Rakudo to one machine — it can also be built on top of other virtual machines — but MoarVM is the standard, well-supported target, and this course assumes it. This is the main difference from [Raku++](/essentials/the-rakupp-compiler), which is written in C++ and needs no virtual machine of its own.

## Source code and links

Rakudo is open source and developed in the open:

* [rakudo.org](https://rakudo.org)
* [Rakudo on GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
