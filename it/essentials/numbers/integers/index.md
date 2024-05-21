---
title: Numeri interi in Raku
---

{% include menu.html %}

Il tipo di dato `Int` rappresenta i numeri interi. I numeri possono essere positivi e negativi, e puoi usare un segno `+` esplicito se lo desideri. Ecco alcuni esempi ovvi:

```raku
42
-42
100
-5
0
```

Sì, uno `0` isolato è considerato un intero di default.

## Gruppi di cifre

Raku ha una caratteristica interessante che ti permette di scrivere numeri grandi con alcuni aiuti visivi che dividono le cifre in gruppi di migliaia:

```raku
1_000_000
-3_141_592
```

Anche se puoi costruire un numero come `34_56`, è meglio evitarlo poiché potrebbe confondere altre persone che leggono il tuo codice. Tuttavia, non puoi avere due trattini bassi adiacenti, né puoi iniziare o terminare il numero con essi.

## Numeri interi arbitrariamente lunghi

Raku gestisce perfettamente i numeri oltre i limiti di 32 o 64 bit. Ad esempio, il seguente programma è un programma accettabile che moltiplica due numeri interi grandi e stampa il risultato corretto.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}