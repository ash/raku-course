---
title: 'Solution: Quante cifre'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say (2 ** 1000).chars;
```

🦋 Puoi trovare il codice sorgente nel file [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Output

```
302
```

## Commenti

1. `2 ** 1000` viene calcolato in modo esatto: Raku non lo arrotonda né va in overflow, perché gli interi hanno precisione arbitraria.

1. `chars` è normalmente un metodo per le stringhe, ma chiamandolo su un intero prima converte il numero nel suo testo decimale e poi conta i caratteri. Poiché qui non ci sono né segno meno né punto decimale, il conteggio dei caratteri corrisponde esattamente al numero di cifre — `302`.

{% include nav.html %}
