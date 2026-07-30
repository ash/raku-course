---
title: 'Oplossing: Optellen tot boven de honderd'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Je kunt de broncode vinden in het bestand [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Uitvoer

```
reached 105 after adding 1..14
```

## Opmerkingen

1. Een kale `loop { }` herhaalt eeuwig; de `last if $sum > 100` is wat hem beëindigt, zodra
de som de drempel overschrijdt.

1. `1 + 2 + … + 14` is `105`, de eerste deelsom boven `100`, dus stopt de lus
met `$n` op `14`.

1. Je kunt die som controleren met een [reductie](/nl/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
