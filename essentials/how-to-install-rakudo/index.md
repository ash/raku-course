---
title: How to install Rakudo
---

{% include menu.html %}

To execute a program in Raku, you need to have a compiler installed. This course uses Rakudo; the other compiler, [Raku++](/essentials/the-rakupp-compiler), is installed [separately](/essentials/how-to-install-rakupp). Visit [the website of Rakudo](https://rakudo.org) to download the version suitable for your operating system.

## Sources

You can download an installer for your system at [rakudo.org/downloads](https://rakudo.org/downloads). There exist versions for all major operating systems: Windows, Mac OS, and Linux. There are also source codes that you can compile yourself.

## Docker images

Rakudo is also available as a docker image. You can use it for both running programs and for testing small scripts in a REPL shell. Find all the instructions at [github.com/Raku/docker](https://github.com/Raku/docker).

## Version numbers

The Rakudo version numbering system forms the version number as a two-part number: the year and the month of the release date. You can easily see how fresh your compiler is. Run the following command line to see its version number:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

You can see three version numbers here. The first one is the version of Rakudo itself: `v2026.06`. Then comes the version of the Raku language: `v6.d`. The updates will currently get the next letter as a minor version part, e.g., `v6.e`, etc. Finally, we see the name of the virtual machine used in this compiler: MoarVM version `2026.06`.

{% include nav.html %}
