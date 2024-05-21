---
title: 'Soluzione: Funzione intervallo'
---

{% include menu.html %}

In questa funzione, viene utilizzata una struttura `if` a tre rami. I primi due rami hanno un test booleano, ma il terzo controllo non è necessario poiché è l'unica opzione rimanente se il numero non ha superato nessuno dei primi due test.

## Codice

Ecco la soluzione:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Trova il programma nel file [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/interval-function.raku).

## Output

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}