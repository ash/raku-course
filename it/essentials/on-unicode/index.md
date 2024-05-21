---
title: Note sull'uso di Unicode
---

{% include menu.html %}

Raku presume che tutti i file del tuo programma siano salvati come file UTF-8. Dal punto di vista pratico, ciò significa che non devi preoccuparti dei caratteri non ASCII, ad esempio, nei letterali di stringa. Ma non è solo questo. Molto probabilmente non dovrai preoccuparti se il tuo programma legge un file di testo che è anche un file UTF-8. Significa anche che la lunghezza della stringa viene rilevata correttamente come numero di caratteri e non come numero di byte. (Ne parleremo più dettagliatamente in seguito.)

La prossima cosa che vuoi sapere è che puoi usare lettere non latine o non inglesi per gli identificatori. Puoi nominare la tua variabile `$ι` invece di `$i` se preferisci, e il compilatore la analizzerà correttamente.

Raku tratta le proprietà Unicode dei caratteri in modo abbastanza pedante. Ad esempio, non solo sa se un carattere è una lettera o una cifra, ma identifica correttamente i caratteri di coppia come parentesi o diversi tipi di parentesi. In molti casi, puoi scegliere un tipo diverso di parentesi per parti separate del programma. Ad esempio, puoi modificare il nostro programma ‘Hello, World!’ per usare questi caratteri di citazione non latini (li vedrai di nuovo quando lavoreremo con le grammatiche Raku):

```raku
say ｢Hello, World!｣;
```

Alcuni operatori integrati hanno due forme: una versione Unicode e una versione ASCII. Ad esempio, si può digitare un confronto negato come `!=` o come `≠`. Lo stesso vale per le operazioni sugli insiemi: ad esempio, `∈` ha un equivalente puramente ASCII `(elem)`. Oppure, c'è una costante integrata a cui puoi fare riferimento come `pi` o `π`.

Quando lavori con i numeri, puoi scegliere di usare frazioni nella forma di `½` invece di `0.5`. Oppure, valutare il quadrato di `$x` come `$x²` usando un carattere apice.

Trova l'elenco completo di tali coppie alla seguente pagina di documentazione: 📖 [Simboli Unicode contro ASCII](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}