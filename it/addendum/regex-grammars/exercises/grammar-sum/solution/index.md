---
title: 'Soluzione: Una grammatica che somma'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Output

```
12
```

## Commenti

1. `<number>+ % '+'` riconosce uno o più numeri separati da segni `+` — il modificatore
`%` descrive il separatore fra le ripetizioni.

1. Il metodo di azione gira quando `TOP` corrisponde. `make` vi attacca un valore calcolato
— la somma dei numeri — che `.made` rilegge dopo l'analisi.

1. Un `token` non salta mai gli spazi, quindi questa grammatica è severa sul proprio input:
`'3+4+5'` viene analizzato, `'3 + 4 + 5'` no (`.parse` restituisce `Nil`). Per accettare
spazi attorno ai segni più, rendi `TOP` una `rule` — e stacca il quantificatore dal suo
atomo:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    In una `rule`, lo spazio bianco nello schema sta per una chiamata implicita a `<.ws>`.
Scritto come `<number> + % '+'`, con uno spazio prima del quantificatore `+`, quello spazio
sottinteso copre l'intera ripetizione — separatori compresi — quindi vengono analizzati sia
`'3+4+5'` sia `'3 + 4 + 5'`, e la somma è `12` in entrambi i casi. (Se preferisci restare
con un `token`, scrivi per esteso gli spazi nel separatore:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
