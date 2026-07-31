---
title: 'Risinājums: Saskaitiet rakstzīmes'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Atrodiet programmu failā [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Izvade

```
4
```

## Komentāri

1. `spurt` ieraksta failā virkni `Raku`.

1. `slurp` to nolasa atpakaļ kā virkni, un `.chars` saskaita tās rakstzīmes — četras.

1. Ja failu apskatīsiet, tajā tiešām būs redzamas tikai četras rakstzīmes; jaunas rindas rakstzīme netiek pievienota.

{% include nav.html %}
