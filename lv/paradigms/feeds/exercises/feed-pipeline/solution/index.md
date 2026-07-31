---
title: 'Risinājums: Plūsmas konveijers'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Atrodiet programmu failā [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Izvade

```
[8 10 12 14 16]
```

## Komentāri

1. Pirmais posms patur skaitļus, kas lielāki par `3` (tie ir `4, 5, 6, 7, 8`); otrais katru no tiem dubulto.

1. Katrs `==>` savu rezultātu padod nākamajam posmam, un pēdējais to savāc `@result`.

{% include nav.html %}
