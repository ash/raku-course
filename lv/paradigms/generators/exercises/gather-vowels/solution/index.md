---
title: 'Risinājums: Vākšana ar nosacījumu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Atrodiet programmu failā [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Izvade

```
[e u a i o]
```

## Komentāri

1. `.comb` sadala vārdu atsevišķās rakstzīmēs, ko cikls pēc kārtas apmeklē.

1. `take` rakstzīmi patur tikai tad, kad tā atbilst patskaņu klasei, dodot patskaņus tādā secībā, kādā tie parādās.

{% include nav.html %}
