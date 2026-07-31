---
title: 'Risinājums: Sākas ar'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Atrodiet programmu failā [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Izvade

```
True
```

## Komentāri

1. Enkurs `^` liek sakritībai sākties virknes sākumā, un `\d` tad pieprasa, lai šī pirmā rakstzīme būtu cipars.

1. Bez `^` raksturs izdotos arī ciparam, kas parādās kaut kur vēlāk virknē, piemēram, `'apples 3'`.

{% include nav.html %}
