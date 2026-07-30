---
title: 'Solution: Twee controles plannen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Je kunt de broncode vinden in het bestand [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Uitvoer

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Opmerkingen

1. `plan 2` geeft het aantal aan voordat er een test wordt uitgevoerd, waardoor de regel `1..2` als eerste verschijnt. Als het bestand daarna een ander aantal controles zou uitvoeren, wordt de suite als mislukt gerapporteerd -- een beveiliging die `done-testing` je niet kan bieden.

1. `is-deeply` vergelijkt de twee lijsten op exacte, typebewuste gelijkheid. Het sorteren van `3, 1, 2` geeft `1, 2, 3`, wat overeenkomt.

1. `is` vergelijkt twee waarden op gewone gelijkheid en toont beide bij een fout. Hier is `10 % 3` gelijk aan `1`, wat overeenkomt met de verwachte waarde, dus de tweede test slaagt ook.

{% include nav.html %}
