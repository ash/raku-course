---
title: 'Solvo: Adicii vektorojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 Vi povas trovi la fontkodon en la dosiero [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Eligo

```
(4, 6)
```

## Komentoj

1. `add` ne ŝanĝas iun el la du vektoroj; ĝi konstruas kaj redonas tute novan
`Vector` el la sumigitaj komponantoj.

1. Rimarku, ke `Vector` estas uzata *ene de sia propra difino* — kiel la parametra
tipo `Vector $v` kaj en `Vector.new`. Tio estas tute en ordo: la tipnomo estas
konata de la momento, kiam ĝia deklaro komenciĝas, do klaso povas libere referenci
sin mem en siaj propraj metodoj. Ne necesas ia ajn antaŭdeklaro.

1. `put` ĉenigas sian argumenton per la metodo `Str`, do la propra formatado
`"($.x, $.y)"` estas tio, kio aperas.

{% include nav.html %}
