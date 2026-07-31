---
title: 'Solution: Un array nativo'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Puoi trovare il codice sorgente nel file [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Output

```
555
```

## Commenti

1. Mettendo il tipo nativo con dimensione fissa `uint8` prima dell'array `@` si dichiara un array in cui ogni elemento è memorizzato come un singolo byte senza segno — il layout compatto adatto ai dati binari.

1. Il limite di riavvolgimento si applica a ciascun *elemento* (`0..255`), non al risultato della loro somma. `.sum` esegue il boxing del totale in un normale `Int`, quindi `100 + 200 + 255` dà il risultato completo `555`.

{% include nav.html %}
