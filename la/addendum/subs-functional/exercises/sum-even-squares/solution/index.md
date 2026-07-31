---
title: 'Solutio: Summa quadratorum parium'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Inveni codicem fontem in archivo [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Exitus

```
220
```

## Commentarii

1. Catena a sinistra ad dextram legitur: `.grep(* %% 2)` numeros pares servat,
`.map(* ** 2)` unumquemque quadrat, et `[+]` quadrata ad summam eorum reducit.

1. Numeri pares `2 4 6 8 10` in `4 16 36 64 100` quadrantur, quae `220` efficiunt.

1. Idem gradus ut [fistula alimentaria](/la/paradigms/feeds/feed-operator) scribi possunt,
ubi `==>` unumquemque effectum ad gradum sequentem transmittit — itaque fluxus a summo ad
imum legitur potius quam ut catena methodorum:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Unumquodque `==>` indicem suum sinistrum in subprogramma sequens alit, et ultimum
    `==> say()` summam imprimit, `220`.

{% include nav.html %}
