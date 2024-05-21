---
title: Multi-funzioni
---

{% include menu.html %}

Raku implementa _multiple dispatch_ basato sulla firma della funzione. Permette di creare funzioni che condividono lo stesso nome ma hanno tipi di dati di input differenti. Usa il dichiaratore `multi` per ciascuna delle varianti della funzione.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(È possibile omettere `sub` dopo `multi`.)

Se hai due varianti della stessa funzione, il compilatore esegue il multiple dispatch a seconda degli argomenti che vede nella chiamata della funzione. Confronta le seguenti due chiamate:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

La prima chiamata attiva la funzione con parametri interi, mentre la seconda chiamata esegue la seconda variante della funzione che si aspetta due stringhe.

## Parametri letterali

Un caso interessante per le multi-funzioni è avere varianti che hanno valori letterali come parametri. Considera le seguenti due varianti:

```raku
multi sub f(42) {say 'Questa è la risposta'}
multi sub f($x) {say "$x non è la risposta"}
```

La prima variante viene eseguita solo quando chiami la funzione con il valore esatto di 42. Negli altri casi, viene utilizzata la seconda variante. L'ordine in cui queste funzioni sono definite non importa.

```raku
f(10); # 10 non è la risposta
f(42); # Questa è la risposta
```

{% include nav.html %}