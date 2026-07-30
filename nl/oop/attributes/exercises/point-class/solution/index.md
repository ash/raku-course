---
title: 'Oplossing: Een puntklasse'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 Je kunt de broncode vinden in het bestand [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. De twee declaraties `has $.x` en `has $.y` maken de attributen samen met hun leesaccessors.

1. Elk object bewaart zijn eigen `x` en `y`, dus `$a` en `$b` melden verschillende coördinaten hoewel ze van dezelfde soort object zijn. Die onafhankelijkheid is precies waar attributen om draaien — elke instantie draagt haar eigen gegevens.

{% include nav.html %}
