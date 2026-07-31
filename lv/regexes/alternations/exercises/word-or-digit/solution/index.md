---
title: 'Risinājums: Vārds vai cipars'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Atrodiet programmu failā [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Izvade

```
｢5｣
```

## Komentāri

1. Alternatīva sajauc literāli `cat` ar rakstzīmju klasi `\d`. Raksturs sakrīt ar to alternatīvu, kura virknē atrodama pirmā.

1. Virknē `item 5` nav neviena `cat`, taču ir cipars, tāpēc `\d` sakrīt ar `5`.

{% include nav.html %}
