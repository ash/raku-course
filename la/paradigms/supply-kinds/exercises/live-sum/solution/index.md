---
title: 'Solutio: Fluxum vivum summa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Inveni codicem fontem in archivo [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Exitus

```
60
```

## Commentarii

1. Unumquodque `.emit` valorem ad coniunctionem tradit, quae illum ad `$total` addit.

1. Post tres emissiones summa est `10 + 20 + 30`, id est `60`.

{% include nav.html %}
