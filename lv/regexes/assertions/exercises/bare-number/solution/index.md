---
title: 'Risinājums: Kails skaitlis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Atrodiet programmu failā [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Izvade

```
｢5｣
```

## Komentāri

1. `<!after '$'>` ir negatīva lūkošanās atpakaļ: tā izdodas tikai tad, kad rakstzīme tieši pirms pašreizējās pozīcijas **nav** `$`. Tā šo kaimiņu pārbauda, to nepatērējot.

1. `9` tiek noraidīts, jo tas atrodas tieši aiz `$`, tāpēc dzinējs tā vietā sakritina agrāko `5`, kuram priekšā nav nekā.

{% include nav.html %}
