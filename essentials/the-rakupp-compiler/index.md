---
title: The Raku++ compiler
---

{% include menu.html %}

**Raku++** — its executable is called `rakupp` — is a second Raku compiler, first released in July 2026. Where Rakudo runs on the MoarVM virtual machine, Raku++ is written in **C++** and needs no virtual machine of its own.

It is both an **interpreter** and a **compiler**: it can run a program directly, or translate it into native code for extra speed. Because there is no heavy runtime to start up, `rakupp` launches in just a few milliseconds, which makes it pleasant for short scripts and everyday command-line work. Its author describes it as the fastest Raku compiler.

Raku++ implements Raku 6.d (with some 6.e features). At version 0.5.1 it already passes about 82% of the Roast test suite — the official set of Raku tests. It is young, so it does not yet cover the whole language, but it is developing quickly.

## Interpreter and compiler modes

Run a program straight away, just as you would with Rakudo:

```console
$ rakupp hello.raku
```

Or ask Raku++ to turn a program into a standalone native executable, which runs even faster:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

For everyday learning the plain interpreter mode is all you need; the compiling modes are there when you want the extra speed.

## Source code

Raku++ is open source. You can find it, together with release binaries and build instructions, at [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
