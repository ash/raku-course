---
title: 'Solution: De native standaardwaarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Je kunt de broncode vinden in het bestand [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Uitvoer

```
0
[]
```

## Opmerkingen

1. Een native `num` kan niet ongedefinieerd zijn, dus net als een native `int` begint het op `0` in plaats van op `(Num)`.

1. Een native `str` begint als de lege string, daarom komen de haken uit zonder iets ertussen. Geen van de native typen bevat ooit een ongedefinieerde waarde.

1. De typespecificaties zijn hier essentieel. Laat ze weg — schrijf `my $n; my $s;` — en de variabelen worden gewone containers die *ongedefinieerd* (`Any`) beginnen. Dan drukt `say $n` `(Any)` af, en het interpoleren van de ongedefinieerde `$s` geeft de waarschuwing *"Use of uninitialized value ... in string context"*. Het zijn de native `num`- en `str`-typen die de standaardwaarden `0` en lege string garanderen.

{% include nav.html %}
