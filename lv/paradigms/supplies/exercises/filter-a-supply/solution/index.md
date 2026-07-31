---
title: 'Risinājums: Filtrējiet supply'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Atrodiet programmu failā [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Izvade

```
[2 4 6]
```

## Komentāri

1. `grep(* %% 2)` rada jaunu supply, kas tālāk laiž tikai pāra vērtības — tāpat kā `grep` filtrē sarakstu.

1. Pieslēgums šīs vērtības savāc `@out`, dodot `[2 4 6]`.

{% include nav.html %}
