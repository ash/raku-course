---
title: 'Risinājums: Anonīms kvadrāts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Atrodiet programmu failā [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Izvade

```
(1 4 9)
```

## Komentāri

1. `sub ($x) { $x * $x }` nav nosaukuma, un tā nekad netiek glabāta mainīgajā — tā tiek nodota tieši `map` kā arguments.

1. `map` to piemēro katram `1, 2, 3` elementam, kāpinot tos kvadrātā par `(1 4 9)`. Šāda anonīmas apakšprogrammas nodošana uz vietas ir visbiežākais iemesls tādu rakstīt.

{% include nav.html %}
