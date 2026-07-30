---
title: 'Oplossing: Lopende sommen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Je kunt de broncode vinden in het bestand [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Uitvoer

```
[2 6 12 20]
```

## Opmerkingen

1. Het blok houdt een lopende `$sum` bij in een variabele buiten de map. Elke aanroep telt
het huidige element erbij op en geeft de nieuwe som terug, dus is de gemapte lijst de
reeks deelsommen.

1. Raku heeft dit ingebouwd. De [driehoeksreductie](/nl/advanced/metaoperators/reduction)
`[\+]` bewaart elke deelsom, dus is de hele oplossing één enkele uitdrukking:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Ze geeft een `Seq` terug, dus haar gist gebruikt haakjes — `(2 6 12 20)` — in plaats van
    de `[2 6 12 20]` van de array, maar de getallen zijn dezelfde.

{% include nav.html %}
