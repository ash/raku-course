---
title: The mutsu interpreter
---

{% include menu.html %}

**mutsu** is a third implementation of Raku, written in **Rust** by Tokuhiro Matsuno. Like Rakudo, it compiles your program to bytecode and runs it on a virtual machine — but the virtual machine is its own, built into the `mutsu` executable, rather than MoarVM.

mutsu implements Raku 6.d and is under active development. Its author says plainly that it is not yet suitable for production use, but it already passes nearly all of the Roast test files, so almost all of the programs in this course run on it unchanged.

One gap matters while you are learning: some compile-time checks are still missing. Most visibly, as of version 0.24.0, mutsu does not report a variable you forgot to declare before the program runs, the way Rakudo and Raku++ do. When the course shows such an error message, try that example with one of the other two compilers.

## Raku in the browser

mutsu can also be compiled to WebAssembly, so it runs inside a web page. Its website, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), uses this for an introduction to Raku in English and Japanese, a hands-on tutorial, and a playground where you can run Raku without installing anything — everything on those pages is running mutsu itself.

## Modules

mutsu comes with its own copy of the zef package manager, called `mzef`, so Raku modules can be installed for it in the usual way, with `mzef install` followed by the module’s name.

## Source code

mutsu is open source. You can find it, together with release builds and build instructions, at [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
