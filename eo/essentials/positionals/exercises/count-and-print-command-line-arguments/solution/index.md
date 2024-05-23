---
title: Solvo de ‘Kalkuli kaj presi komando-linio argumentojn’
---

{% include menu.html %}

En ĉi tiu programo, `for` buklo estas bona elekto.

## Kodo

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Trovu la programon en la dosiero [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Eligo

Rulu la programon kaj konfirmu ke ĝi presas la argumentojn kaj linio-numerojn:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Diskuto

Ĉi tiu programo uzas kelkajn utilajn trukojn. Unue, la `for` buklo iras laŭ la [intervalo konstruita kun `^`](/eo/essentials/ranges/excluding-endpoints). Do, la intervalo komenciĝas de 0 kaj iras ĝis (sed ne inkluzive) la valoro de `@*ARGS`. En ĉi tiu kunteksto, [ĝi redonas](/eo/essentials/positionals/arrays#size) la longojn de la aro.

Ĉar la unua elemento de aro havas indekson `0`, kaj la tasko postulas ke ni kalkulu la liniojn de `1`, ĉi tiu simpla ŝanĝo estas kalkulita [ene de koda bloko](/eo/essentials/strings/code-interpolation) en ŝnuro: `"{$n + 1} ..."`.

{% include nav.html %}