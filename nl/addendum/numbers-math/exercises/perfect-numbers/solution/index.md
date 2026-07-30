---
title: 'Oplossing: Volmaakte getallen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Je kunt de broncode vinden in het bestand [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Uitvoer

```
[6 28]
```

## Opmerkingen

1. `(1..^$n).grep($n %% *)` houdt de getallen onder `$n` die het zonder rest delen —
zijn echte delers. De `%% *` is een Whatever-functie die deelbaarheid test.

1. `[+]` telt die delers op, en de buitenste `grep` houdt alleen de getallen die
gelijk zijn aan die som.

{% include nav.html %}
