---
title: Named regexes
---

{% include menu.html %}

So far you have written patterns directly inside `/ … /`. You can also give a pattern a **name** and reuse it, just like a subroutine. Declare one with `my regex` (or `my token`, which you will meet properly soon):

```raku
my regex number { \d+ }
```

To use a named regex inside another pattern, write its name in angle brackets, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

Calling `<number>` both matches the pattern **and** captures it under that name, so the matched text is available as `$<number>` — a named capture you get for free.

A named regex can be used several times in one pattern. When it appears more than once, the captures become a list, reached by index:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Named regexes keep patterns readable and let you build larger ones out of smaller, well-named parts. That is exactly what a grammar does on a bigger scale.

{% include nav.html %}
