---
title: Debugging Raku programs
---

{% include menu.html %}

There are different ways to debug a program, from a simple printing instruction such as `say` to more elaborate tracing tools. In this section, we will look at the handy `dd` routine. It is built into the Rakudo compiler, although it is not a part of the Raku language standard itself.

The name `dd` stands for _data dumper_. Unlike `say` or `put`, which are meant for the normal output of the program, `dd` prints a developer-friendly representation of a value — the same code-like form produced by the [`.raku`](/advanced/representations/raku-method) method from the previous section. It writes to the standard error stream, so its output does not mix with the data that your program prints for the user.

{% include nav.html %}
