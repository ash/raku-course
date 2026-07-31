---
title: 'Solution: Rilassare strict'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Puoi trovare il codice sorgente nel file [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Output

```
30
```

## Commenti

1. `no strict` disattiva il requisito di dichiarazione delle variabili, quindi `$a` e `$b` possono essere assegnati senza `my`. Con il `strict` predefinito, ciascuna di quelle righe sarebbe un errore di compilazione.

1. Una volta assegnate, le variabili si comportano normalmente, quindi `$a + $b` dà `30`. Il rilassamento è lessicale — dura solo fino alla fine dello scope in cui appare `no strict`.

1. Questa è una dimostrazione, non una pratica consigliata: `strict` è attivo per impostazione predefinita per una buona ragione — intercetta gli errori di battitura nei nomi delle variabili al momento della compilazione. Nel codice reale, mantienilo attivo e dichiara le variabili con `my`.

{% include nav.html %}
