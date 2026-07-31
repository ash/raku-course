---
title: 'Risinājums: Punkta klase'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Izvade

```
5
```

## Komentāri

1. Abas deklarācijas `has $.x` un `has $.y` izveido atribūtus kopā ar to lasīšanas piekļuves metodēm.

1. Katrs objekts glabā savu `x` un `y`, tāpēc `$a` un `$b` ziņo dažādas koordinātas, lai gan ir viena veida objekti. Šī neatkarība ir visa atribūtu jēga — katra instance nes savus datus.

{% include nav.html %}
