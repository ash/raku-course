---
title: 'Solutio: Grammatica quae addit'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Exitus

```
12
```

## Commentarii

1. `<number>+ % '+'` unum vel plures numeros signis `+` separatos congruit — modificator
`%` separatorem inter repetitiones describit.

1. Methodus actionis currit cum `TOP` congruit. `make` valorem computatum affigit — summam
numerorum — quem `.made` post analysin relegit.

1. `token` spatia numquam praeterit, itaque haec grammatica de ingressu suo severa est:
`'3+4+5'` analysatur, sed `'3 + 4 + 5'` non (`.parse` `Nil` reddit). Ut
spatia circa signa plus accipias, fac `TOP` esse `rule` — et separa quantorem
ab atomo suo:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    In `rule`, spatium in exemplari vocationem implicitam `<.ws>` significat.
Ut `<number> + % '+'` scriptum, cum spatio ante quantorem `+`, illud
spatium implicitum totam repetitionem tegit — separatoribus inclusis — itaque et
`'3+4+5'` et `'3 + 4 + 5'` analysantur, et summa `12` utroque modo est. (Si
mavis apud `token` manere, scribe spatia expresse in separatore:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
