---
title: 'Solution: Fattoriale ricorsivo'
---

{% include menu.html %}

Il fattoriale è un esercizio molto produttivo, poiché può essere risolto in diversi modi. Questa volta stiamo usando la ricorsione, il che significa che la funzione viene chiamata da se stessa.

## Codice 1

Ecco il codice della soluzione. Nota che è necessario controllare la condizione per fermare la ricorsione, altrimenti continuerà all'infinito.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Trova il programma nel file [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Codice 2

In casi come mostrato in questo codice, è spesso meglio usare le forme postfisse di `if` per restituire immediatamente dalla funzione. Questo approccio rende il codice più chiaro e rimuove molte indentazioni e punteggiature.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Trova il programma aggiornato nel file [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Esempio

Esegui il programma e controlla il risultato. A proposito, sapevi che _10!_ è esattamente il numero di secondi in sei settimane?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}