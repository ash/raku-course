---
title: Debugging Raku programs
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

There are different approaches to debugging the programs, from simple printing instruction, such as `print` or `say`, to more elaborate tracing options. In this chapter, we’ll take a look at a very handy `dd` function that is built-in in the Rakudo compiler, but which is not an official part of the Raku language itself.

The name `dd` stands for _data dumper_.

{% include nav.html %}
