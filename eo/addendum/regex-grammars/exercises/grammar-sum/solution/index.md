---
title: 'Solvo: Gramatiko kiu adicias'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Sum {
    token TOP    { <number>+ % '+' }
    token number { \d+ }
}

class SumActions {
    method TOP($/) { make [+] $<number>.map(*.Int) }
}

say Sum.parse('3+4+5', actions => SumActions).made;
```

🦋 Vi povas trovi la fontkodon en la dosiero [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Eligo

```
12
```

## Komentoj

1. `<number>+ % '+'` kongruas kun unu aŭ pluraj nombroj apartigitaj per signoj `+` — la
modifilo `%` priskribas la apartigilon inter ripetoj.

1. La aga metodo plenumiĝas, kiam `TOP` kongruas. `make` alligas kalkulitan valoron — la
sumon de la nombroj — kiun `.made` relegas post la analizo.

1. `token` neniam preterpasas spacojn, do ĉi tiu gramatiko estas strikta pri sia enigo:
`'3+4+5'` analiziĝas, sed `'3 + 4 + 5'` ne (`.parse` redonas `Nil`). Por akcepti
spacojn ĉirkaŭ la plus-signoj, faru `TOP` `rule` — kaj apartigu la kvantigilon
de ĝia atomo:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    En `rule`, spaceto en la ŝablono reprezentas implicitan vokon `<.ws>`.
Skribita kiel `<number> + % '+'`, kun spaco antaŭ la kvantigilo `+`, tiu
implicita spaceto kovras la tutan ripeton — apartigilojn inkluzive — do kaj
`'3+4+5'` kaj `'3 + 4 + 5'` estas analizataj, kaj la sumo estas `12` ambaŭokaze. (Se vi
preferas resti ĉe `token`, skribu la spacojn en la apartigilo:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
