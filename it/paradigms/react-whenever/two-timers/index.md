---
title: Due timer
translations_gpt:
---

{% include menu.html %}

Ogni esempio con react visto finora ha usato `Supply.from-list`, che spinge tutti i propri valori nell'istante in cui gli si attinge. È per questo che ogni flusso si stampava per intero prima che cominciasse il successivo: non c'era alcuna attesa di mezzo. I flussi di eventi veri non sono così: i loro valori arrivano distribuiti nel **tempo**, e un blocco `react` li intreccia man mano che vengono.

Un timer è il flusso più semplice che si comporta così. `Supply.interval($period)` emette un contatore crescente — `0, 1, 2, …` — una volta ogni `$period` secondi. Fanne girare due a ritmi diversi dentro un unico `react`, e i loro valori si intrecciano:

```raku
react {
    whenever Supply.interval(0.3) {
        say "tick $_";
    }
    whenever Supply.interval(0.5, 0.25) {
        say "TOCK $_";
    }
    whenever Promise.in(1.4) {
        done;
    }
}
```

Una esecuzione tipica stampa:

```
tick 0
TOCK 0
tick 1
tick 2
TOCK 1
tick 3
tick 4
TOCK 2
```

Il rapido `tick` scatta ogni `0.3` secondi; il più lento `TOCK` ogni `0.5`, cominciando un quarto di secondo dopo (il secondo argomento di `interval` è quel ritardo iniziale). Nessuno dei due aspetta l'altro: il blocco `react` esegue semplicemente il corpo del `whenever` che va con il valore arrivato, quindi i due flussi si **intersecano** invece di darsi il turno.

Poiché i timer non finiscono mai da soli, un terzo `whenever` fornisce l'uscita: `Promise.in(1.4)` viene mantenuta dopo 1,4 secondi, e il suo corpo chiama `done` per chiudere il blocco `react`. Senza di esso il react ticchetterebbe e toccherebbe per sempre.

L'intreccio esatto dipende dal tempismo, quindi un'esecuzione successiva potrebbe ordinare le righe un po' diversamente — ma è la natura del reagire a eventi dal vivo: rispondi a ciascuno mentre accade, quando accade.

{% include nav.html %}
