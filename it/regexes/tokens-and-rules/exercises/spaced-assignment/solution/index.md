---
title: "Soluzione: Un'assegnazione con spazi"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Trova il programma nel file [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Output

```
True
```

## Commenti

1. Poiché `TOP` è una `rule`, gli spazi nello schema permettono dello spazio bianco attorno all'`=` nell'input.

1. Quindi `'x = 5'` viene analizzato. Con un `token` per `TOP` corrisponderebbe solo `'x=5'`.

Lo spazio bianco che una `rule` ammette è **facoltativo**, non obbligatorio: lo spazio significativo riconosce *zero* spazi con la stessa disinvoltura con cui ne riconosce uno, quindi viene analizzata anche la forma senza spazi:

```raku
say Assign.parse('x=5').defined; # True
```

La `rule` accetta perciò allo stesso modo `'x = 5'`, `'x=5'` e persino `'x =5'` — flessibilità senza dover specificare dove uno spazio possa esserci o no.

{% include nav.html %}
