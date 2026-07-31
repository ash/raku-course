---
title: 'Solution: Pianificare due controlli'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Puoi trovare il codice sorgente nel file [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Output

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Commenti

1. `plan 2` dichiara il conteggio prima che qualsiasi test venga eseguito, quindi la riga `1..2` appare per prima. Se il file eseguisse poi un numero diverso di controlli, la suite verrebbe segnalata come fallita — una protezione che `done-testing` non può offrire.

1. `is-deeply` confronta le due liste per uguaglianza esatta e consapevole dei tipi. L'ordinamento di `3, 1, 2` dà `1, 2, 3`, che corrisponde.

1. `is` confronta due valori per uguaglianza semplice e in caso di fallimento riporta entrambi. Qui `10 % 3` è `1`, che corrisponde al valore atteso, quindi anche il secondo test ha successo.

{% include nav.html %}
