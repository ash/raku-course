---
title: whenever
translations_gpt:
---

{% include menu.html %}

Un solo blocco `react` può contenere **parecchi** blocchi `whenever`, ciascuno che osserva un supply diverso. Il blocco reagisce a qualunque supply emetta per primo, eseguendo il corpo corrispondente:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Entrambi i supply sono osservati insieme. I loro valori — `1, 2, 3` e `10, 20` — confluiscono tutti in `$sum`, che finisce a `36`. Il blocco `react` finisce solo quando **entrambi** i supply sono conclusi.

Ogni `whenever` reagisce in modo indipendente, ed è così che combini i flussi: un `whenever` per sorgente, tutti dentro lo stesso `react`. Un programma vero potrebbe osservare una connessione di rete in un `whenever` e un timer in un altro, rispondendo a ciascuno man mano che i suoi eventi arrivano.

Dentro il corpo di un `whenever` hai il valore emesso (come `$_` o come parametro con nome) e puoi farne qualunque cosa: aggiornare uno stato, emettere verso un altro supply o persino chiudere in anticipo il blocco react con `done`.

{% include nav.html %}
