---
title: 'Solvo: Sumo de la paraj kvadratoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Eligo

```
220
```

## Komentoj

1. La ĉeno legiĝas de maldekstre dekstren: `.grep(* %% 2)` konservas la parajn
nombrojn, `.map(* ** 2)` kvadratigas ĉiun, kaj `[+]` reduktas la kvadratojn al
ilia sumo.

1. La paraj nombroj `2 4 6 8 10` kvadratiĝas al `4 16 36 64 100`, kiuj sumiĝas al `220`.

1. La samaj paŝoj skribeblas kiel [flua ĉenstacio](/eo/paradigms/feeds/feed-operator),
kie `==>` transdonas ĉiun rezulton al la sekva etapo — do la fluo legiĝas de supre
malsupren prefere ol kiel metodoĉeno:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Ĉiu `==>` nutras sian maldekstran liston en la sekvan rutinon, kaj la fina
    `==> say()` presas la sumon, `220`.

{% include nav.html %}
