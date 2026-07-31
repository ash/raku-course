---
title: 'Solutio: Sero se coniungere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Inveni codicem fontem in archivo [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Exitus

```
[2 3]
```

## Commentarii

1. `Supplier` finis mittens est; `.Supply` eius est id ad quod te coniungis. Supply vivum solum ad coniunctiones **illo momento** emissionis audientes diffundit.

1. `emit(1)` accidit antequam ulla coniunctio exsistit, itaque perit — sicut stationem radiophonicam post cantum peractum intendere. Soli `2` et `3`, post coniunctionem emissi, capiuntur, dantes `[2 3]`.

{% include nav.html %}
