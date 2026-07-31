---
title: 'Solvo: Komunaj elementoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Vi povas trovi la fontkodon en la dosiero [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Eligo

```
2
False
```

## Komentoj

1. La komunaĵo `$a ∩ $b` estas mem aro — ĉi tie `{banana, cherry}` — do ĝi havas `2` elementojn. Se vi preferas ASCII, skribu `(&)` anstataŭ `∩`.

1. Ĉar la komunaĵo estas aro, vi povas fari al ĝi la demandon pri membreco per `∈`. `apple` estas nur en la unua aro, do ĝi ne estas en la komunaĵo, kaj la testo redonas `False`.

{% include nav.html %}
