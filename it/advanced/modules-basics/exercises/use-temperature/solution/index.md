---
title: 'Solution: Usare il convertitore'
translations_gpt: La soluzione di 'Usare il convertitore'
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

Il programma, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Output

```console
$ raku -I. temperature.raku 100
212
```

## Commenti

1. `use Temperature` carica il modulo e importa la subroutine esportata `c-to-f`, cosi il programma puo chiamarla direttamente.

1. `sub MAIN($celsius)` riceve l'argomento da riga di comando, cosi la temperatura da convertire viene scelta quando il programma viene eseguito anziche essere codificata nel sorgente. Eseguito senza argomento, Raku stampa automaticamente un messaggio di utilizzo.

1. Il modulo deve essere raggiungibile, ed e per questo che il programma viene eseguito con `-I.` affinche Raku cerchi `Temperature.rakumod` nella directory corrente. La conversione di `100` °C da `212` °F.

{% include nav.html %}
