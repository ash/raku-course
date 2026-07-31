---
title: 'Solvo: Speco de triangulo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Eligo

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Komentoj

1. La gardilo `unless` malakceptas laterajn longojn, kiuj rompas la triangulan
malegalaĵon, antaŭ ol okazas ajna klasifiko.

1. La nombro de *malsamaj* lateraj longoj diras la specon: unu signifas, ke ĉiuj
egalas (egallatera), du signifas, ke precize unu paro egalas (egalkrura), tri
signifas, ke ĉiuj estas malsamaj (neregula).

1. Malkomponi la buklan variablon kiel `-> ($a, $b, $c)` malpakas ĉiun internan
liston rekte en tri nomitajn laterojn.

{% include nav.html %}
