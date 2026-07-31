---
title: 'Soluzione: Quale quadrante'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Point {
    has $.x;
    has $.y;

    method quadrant {
        return 'origin'     if $.x == 0 && $.y == 0;
        return 'on an axis' if $.x == 0 || $.y == 0;
        return $.x > 0 ?? ($.y > 0 ?? 'first'  !! 'fourth')
                       !! ($.y > 0 ?? 'second' !! 'third');
    }
}

for Point.new(x => 3, y => 4),  Point.new(x => -2, y => 5),
    Point.new(x => -1, y => -6), Point.new(x => 0, y => 3) -> $point {
    say "({$point.x}, {$point.y}): {$point.quadrant}";
}
```

🦋 Trova il programma nel file [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Output

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Commenti

1. I due `return` anticipati trattano per primi i casi speciali — l'origine e i punti che
stanno su un asse — così il resto del metodo può presumere che entrambe le coordinate siano
diverse da zero.

1. Il ternario annidato legge poi il quadrante dai segni di `x` e `y`: una `x` positiva
significa primo o quarto quadrante, una `x` negativa il secondo o il terzo.

{% include nav.html %}
