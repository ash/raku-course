---
title: 'Risinājums: Garākā virkne'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Atrodiet programmu failā [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Izvade

```
elephant
```

## Komentāri

1. Bloks patur garāko no saviem diviem argumentiem: `$a` ir līdz šim garākā redzētā virkne, `$b` ir nākamā, un trīsvērtīgais operators atgriež to, kurā ir vairāk rakstzīmju.

1. `reduce` šo uzvarētāju nes tālāk kā nākamā izsaukuma `$a`, tāpēc pēc visa saraksta izstaigāšanas uzkrātā vērtība ir garākā virkne no visām — `elephant`.

{% include nav.html %}
