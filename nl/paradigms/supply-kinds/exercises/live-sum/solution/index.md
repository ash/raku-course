---
title: 'Oplossing: Tel een live stroom op'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Je kunt de broncode vinden in het bestand [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Uitvoer

```
60
```

## Opmerkingen

1. Elke `.emit` levert een waarde aan de tap, die haar bij `$total` optelt.

1. Na de drie uitzendingen is de som `10 + 20 + 30`, dat wil zeggen `60`.

{% include nav.html %}
