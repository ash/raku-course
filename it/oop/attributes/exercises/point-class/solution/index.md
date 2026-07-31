---
title: 'Soluzione: Una classe punto'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Output

```
5
```

## Commenti

1. Le due dichiarazioni `has $.x` e `has $.y` creano gli attributi insieme ai loro accessori in lettura.

1. Ogni oggetto conserva i propri `x` e `y`, quindi `$a` e `$b` riferiscono coordinate diverse pur essendo dello stesso tipo di oggetto. Questa indipendenza è tutto il senso degli attributi: ogni istanza porta con sé i propri dati.

{% include nav.html %}
