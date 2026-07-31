---
title: 'Risinājums: Visa virkne'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Atrodiet programmu failā [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Izvade

```
True
```

## Komentāri

1. Enkuri `^` un `$` piesprauž raksturu virknes sākumam un beigām.

1. Starp tiem `<[a..z]>+` jāaptver katra rakstzīme, tāpēc virkne ar lielo burtu vai atstarpi, piemēram, `Hello there`, neizdotos.

{% include nav.html %}
