---
title: 'Soluzione: Sommate un flusso live'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Trova il programma nel file [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Output

```
60
```

## Commenti

1. Ogni `.emit` consegna un valore alla presa, che lo aggiunge a `$total`.

1. Dopo le tre emissioni il totale è `10 + 20 + 30`, cioè `60`.

{% include nav.html %}
