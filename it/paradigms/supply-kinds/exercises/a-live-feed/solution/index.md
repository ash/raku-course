---
title: 'Soluzione: Collegarsi in ritardo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Trova il programma nel file [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Output

```
[2 3]
```

## Commenti

1. Il `Supplier` è l'estremità che invia; il suo `.Supply` è ciò a cui attingi. Un supply dal vivo trasmette solo alle prese in ascolto **nel momento** di ogni emissione.

1. L'`emit(1)` avviene prima che esista una qualunque presa, quindi va perduto — come sintonizzarsi su una stazione radio dopo che una canzone è già passata. Solo `2` e `3`, emessi dopo la presa, vengono catturati, dando `[2 3]`.

{% include nav.html %}
