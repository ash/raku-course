---
title: 'Oplossing: Som van even kwadraten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Je kunt de broncode vinden in het bestand [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Uitvoer

```
220
```

## Opmerkingen

1. De keten leest van links naar rechts: `.grep(* %% 2)` houdt de even getallen,
`.map(* ** 2)` kwadrateert elk, en `[+]` reduceert de kwadraten tot hun som.

1. De even getallen `2 4 6 8 10` kwadrateren tot `4 16 36 64 100`, wat samen `220` is.

1. Dezelfde stappen kun je als [feed-pijplijn](/nl/paradigms/feeds/feed-operator) schrijven,
waar `==>` elk resultaat aan de volgende fase doorgeeft — zodat de stroom van boven naar
beneden leest in plaats van als methodeketen:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Elke `==>` voert haar linkerlijst aan de volgende routine, en de afsluitende
    `==> say()` drukt de som af, `220`.

{% include nav.html %}
