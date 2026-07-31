---
title: 'Solvo: Sumo kun la sigelo `&`'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Eligo

```
5
```

## Komentoj

1. La pinta bloko listigas du parametrojn, `-> $a, $b`, do la anonima subrutino akceptas du argumentojn.

1. Ĉar la variablo estas deklarita kun la sigelo `&`, ĝi povas esti vokata kiel `add(2, 3)` tute same kiel nomita subrutino — sen sigelo ĉe la vokloko — donante `5`.

{% include nav.html %}
