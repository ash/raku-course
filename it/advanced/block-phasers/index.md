---
title: Phaser di blocco
---

{% include menu.html %}

Oltre ai phaser a livello di programma, Raku dispone di phaser legati al ciclo di vita di un singolo blocco o ciclo.

## Entrare e uscire da un blocco

Il phaser `ENTER` viene eseguito ogni volta che l'esecuzione entra in un blocco, mentre il phaser `LEAVE` viene eseguito ogni volta che ne esce, indipendentemente dalla riga in cui sono scritti:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

L'output mostra che `ENTER` viene eseguito per primo e `LEAVE` per ultimo, attorno al corpo del blocco:

```
before block
entering
inside
leaving
after block
```

`LEAVE` è particolarmente utile perché viene eseguito anche se il blocco viene abbandonato anticipatamente, il che lo rende un posto affidabile per rilasciare una risorsa.

Un phaser può contenere un intero blocco `{ }` invece di una singola istruzione, e se ne possono impostare diversi. Quando un blocco ha più di un `LEAVE`, questi vengono eseguiti in ordine inverso: l'ultimo registrato viene eseguito per primo, quindi il blocco si srotola come uno stack:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

La risorsa `A` viene aperta per prima e chiusa per ultima:

```
open A
open B
work
close B
close A
done
```

Questo ordinamento last-in, first-out è esattamente ciò che si desidera per la pulizia: qualunque cosa sia stata configurata più di recente viene smontata per prima. Il phaser `END` a livello di programma si comporta allo stesso modo: più blocchi `END` vengono eseguiti in ordine inverso rispetto a quello in cui sono stati scritti.

## Phaser dei cicli

All'interno dei cicli, tre ulteriori phaser contrassegnano le fasi dell'iterazione: `FIRST` viene eseguito una volta prima della prima iterazione, `LAST` viene eseguito una volta dopo l'ultima, e `NEXT` viene eseguito alla fine di ogni iterazione:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

Il ciclo produce:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Come per gli altri phaser, la posizione di `FIRST`, `NEXT` e `LAST` nel codice sorgente non ha importanza: ognuno viene eseguito al proprio momento.

{% include nav.html %}
