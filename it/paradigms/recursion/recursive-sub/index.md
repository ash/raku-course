---
title: Una subroutine ricorsiva
translations_gpt:
---

{% include menu.html %}

Una subroutine _ricorsiva_ è una che chiama se stessa. L'esempio classico è il fattoriale: il fattoriale di `n` è `n` per il fattoriale di `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Leggi il corpo come due casi uniti dall'operatore ternario `?? !!`:

* quando `$n` è `1` o meno, la risposta è semplicemente `1`;
* altrimenti la risposta è `$n` per `fact($n - 1)` — la stessa subroutine chiamata con un numero più piccolo.

Ogni chiamata stacca un fattore e chiede un fattoriale più piccolo, finché il numero raggiunge `1` e le chiamate si srotolano: `fact(5)` è `5 * fact(4)`, che è `5 * 4 * fact(3)`, e così via fino a `1`.

La ricorsione esprime molti problemi in modo molto diretto. Ogni volta che un compito si può descrivere in termini di una versione più piccola di se stesso, una subroutine ricorsiva è spesso il modo più naturale di scriverlo.

{% include nav.html %}
