---
title: Global matching
---

{% include menu.html %}

By default, a regex finds only the **first** match. The `:g` adverb (short for `:global`) finds **every** match in the string. It is written on the `m///` operator:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

With `:g`, the result behaves like a list of match objects — one for each place the pattern was found. You can count them, loop over them, or turn each into a string:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Here `\d+` matched three separate runs of digits, and `:g` collected all of them.

Global matching is the natural tool whenever the question is “how many …” or “all of the …” rather than “is there a …”.

{% include nav.html %}
