---
title: The times quantifier
---

{% include menu.html %}

When you need an exact number of repetitions, or a range, use the `**` quantifier followed by a number:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` matches exactly four digits in a row.

A range with two dots allows a variable count. For example, `\d ** 2..3` matches two or three digits — as many as are available, up to three:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

The pattern took three digits, because three is the most it is allowed in the range `2..3`.

You can also leave the upper end open. `\d ** 2..*` means “two or more digits”, and `\d ** 1..*` means the same as `\d+`.

The `**` quantifier is the general form; `*`, `+`, and `?` are just convenient shortcuts for the common cases `0..*`, `1..*`, and `0..1`.

{% include nav.html %}
