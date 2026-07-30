---
title: 'Oplossing: Een accumulator'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Je kunt de broncode vinden in het bestand [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Uitvoer

```
15
```

## Opmerkingen

1. De closure legt `$sum` vast, die tussen aanroepen blijft bestaan.

1. `acc(10)` maakt de som `10`; `acc(5)` telt er vijf bij op en geeft `15` terug.

{% include nav.html %}
