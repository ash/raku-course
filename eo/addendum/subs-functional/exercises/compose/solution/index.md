---
title: 'Solvo: Komponu du funkciojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Eligo

```
12
```

## Komentoj

1. La parametroj `&f` kaj `&g` akceptas ajnajn vokeblojn — ĉi tie la
Whatever-funkciojn `* * 2` kaj `* + 1`.

1. `compose` redonas freŝan anoniman funkcion `-> $x { f(g($x)) }`. Voki ĝin sur
`5` plenumas unue `g` (`5 + 1`), poste `f` (`6 * 2`), donante `12`.

{% include nav.html %}
