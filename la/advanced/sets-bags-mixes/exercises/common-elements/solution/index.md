---
title: 'Solutio: Communia elementa'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Inveni codicem fontem in archivo [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Exitus

```
2
False
```

## Commentarii

1. Intersectio `$a ∩ $b` ipsa inopia est — hic `{banana, cherry}` — itaque `2` elementa habet. Si ASCII praeferas, scribe `(&)` pro `∩`.

1. Quia intersectio inopia est, quaestionem de membris ei ponere potes cum `∈`. `apple` tantum in prima inopia est, itaque in intersectione non est, et probatio `False` reddit.

{% include nav.html %}
