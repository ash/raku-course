---
title: 'Risinājums: Kopīgie elementi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Atrodiet programmu failā [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Izvade

```
2
False
```

## Komentāri

1. Šķēlums `$a ∩ $b` pats ir kopa — šeit `{banana, cherry}` —, tāpēc tam ir `2` elementi. Ja labprātāk lietojat ASCII, `∩` vietā rakstiet `(&)`.

1. Tā kā šķēlums ir kopa, tai var uzdot piederības jautājumu ar `∈`. `apple` ir tikai pirmajā kopā, tāpēc šķēlumā tā nav, un pārbaude atgriež `False`.

{% include nav.html %}
