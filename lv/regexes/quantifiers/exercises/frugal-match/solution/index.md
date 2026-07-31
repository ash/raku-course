---
title: 'Risinājums: Taupīga sakritība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Atrodiet programmu failā [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Izvade

```
｢"hi"｣
```

## Komentāri

1. `?` aiz `.+` padara kvantoru taupīgu, tāpēc tas piemeklē pēc iespējas mazāk rakstzīmju.

1. Tādēļ tas apstājas pie pirmās aizverošās `"`, satverot tikai `"hi"`. Rijīgs `.+` būtu aizskrējis līdz pēdējai `"` un sakritinājis `"hi" and "bye"`.

{% include nav.html %}
