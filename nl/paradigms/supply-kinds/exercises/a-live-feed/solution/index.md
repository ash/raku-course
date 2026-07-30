---
title: 'Oplossing: Te laat afstemmen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Je kunt de broncode vinden in het bestand [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Uitvoer

```
[2 3]
```

## Opmerkingen

1. De `Supplier` is de verzendkant; zijn `.Supply` is wat je aftapt. Een live supply zendt alleen uit naar de taps die **op het moment** van elke uitzending luisteren.

1. De `emit(1)` gebeurt voordat er een tap bestaat, dus gaat hij verloren — als afstemmen op een radiostation nadat een lied al gespeeld is. Alleen `2` en `3`, die na de tap uitgezonden zijn, worden opgevangen, wat `[2 3]` geeft.

{% include nav.html %}
