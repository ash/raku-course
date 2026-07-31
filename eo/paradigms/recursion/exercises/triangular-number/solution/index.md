---
title: 'Solvo: Triangula nombro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Eligo

```
15
```

## Komentoj

1. La baza kazo estas propra kandidato: `multi tri(0)` kongruas nur, kiam la argumento estas ekzakte `0`, kaj redonas `0` sen rekursii.

1. Ĉiu alia voko trafas `multi tri($n)`, kiu aldonas `$n` al la triangula nombro de `$n - 1`. La vokoj malsupreniras `5 + 4 + 3 + 2 + 1 + 0`, kaj kiam la argumento atingas `0`, la disdono ŝanĝiĝas al la baz-kaza kandidato kaj la sumo malvolviĝas al `15`.

{% include nav.html %}
