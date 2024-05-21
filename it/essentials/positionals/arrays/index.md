---
title: Arrays
---

{% include menu.html %}

Gli array sono tipi di dati aggregati che possono contenere più di un valore. Questo differenzia gli array dagli [elementi scalari](/it/essentials/scalar-variables). Gli elementi di un array possono essere indicizzati (o _sottoscritti_). In altre parole, i suoi elementi hanno una posizione (il che spiega il nome generale per questo tipo di dati: posizionali).

Le variabili array utilizzano un altro tipo di sigillo: `@`. Le regole per il nome della variabile sono le stesse [degli scalari](/it/essentials/scalar-variables/identifiers/).

```raku
my @cities;
```

Finora, l'array chiamato `@cities` è stato creato. Puoi riempirlo con alcuni valori:

```raku
@cities = 'Parigi', 'Roma', 'Berlino';
```

In alternativa, è possibile inizializzare i valori immediatamente:

```raku
my @cities = 'Parigi', 'Roma', 'Berlino';
```

## Indicizzazione

Per accedere a un singolo elemento di un array, usa una coppia di parentesi quadre che posizioni dopo il nome della variabile:

```raku
say @cities[1];
```

Nota che il sigillo rimane sempre lo stesso. Poiché gli elementi sono contati da zero, l'elemento `@cities[1]` è `'Roma'` nel nostro esempio.

Gli array sono mutabili, quindi puoi facilmente modificare i loro elementi semplicemente assegnando loro un nuovo valore:

```raku
@cities[0] = 'Roma';
@cities[1] = 'Parigi';
```

Dopo questo, l'istruzione `say @cities[1]` stamperà il nuovo valore `'Parigi'`.

## Dimensione

Per ottenere la lunghezza attuale di un array, o, in altre parole, il numero dei suoi elementi, usa il metodo `elems`:

```raku
say @cities.elems; # 3
```

Se l'array appare in un contesto in cui il parametro previsto è un numero, il valore restituito è la dimensione dell'array:

```raku
say +@cities; # 3
```

Qui, l'[operatore prefisso `+`](/it/essentials/coercion/prefixes) richiede un valore numerico dal suo argomento, quindi il risultato di `+@cities` è `3`.

{% include nav.html %}