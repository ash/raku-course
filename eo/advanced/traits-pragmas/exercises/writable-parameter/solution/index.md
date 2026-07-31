---
title: 'Solvo: Skribebla parametro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Vi povas trovi la fontkodon en la dosiero [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Eligo

```
42
```

## Komentoj

1. `is rw` ligas la parametron `$n` al la variablo `$score` de la vokanto, do `$n *= 2` ene de `double` ŝanĝas `$score` mem — kial ĝi presas `42`.

1. Sen `is rw`, la parametro estus nur-legebla kaj `$n *= 2` estus kompiltempa eraro. Marki ĝin `is copy` anstataŭe donus al `double` privatan kopion por modifi, lasante `$score` netuŝita ĉe `21`.

{% include nav.html %}
