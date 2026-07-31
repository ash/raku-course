---
title: 'Soluzione: Un numero con proto'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Trova il programma nel file [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Output

```
True
```

## Commenti

1. Il proto token `number` ha due varianti, `dec` e `hex`.

1. Per `0xff` la variante `dec` riconosce solo lo `0` iniziale, il che lascerebbe fuori `xff`; la variante `hex` riconosce tutto. Il riconoscimento del token più lungo sceglie perciò `hex`, e la stringa viene analizzata. La stessa grammatica accetta comunque un semplice decimale come `42`.

{% include nav.html %}
