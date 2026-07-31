---
title: 'Solution: Elementi comuni'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Puoi trovare il codice sorgente nel file [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Output

```
2
False
```

## Commenti

1. L'intersezione `$a ∩ $b` è a sua volta un set — qui `{banana, cherry}` — quindi ha `2` elementi. Se si preferisce l'ASCII, si può scrivere `(&)` al posto di `∩`.

1. Poiché l'intersezione è un set, si può porre la domanda di appartenenza con `∈`. `apple` è presente solo nel primo set, quindi non fa parte dell'intersezione e il test restituisce `False`.

{% include nav.html %}
