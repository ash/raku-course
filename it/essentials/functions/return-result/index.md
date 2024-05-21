---
title: Restituire il risultato
---

{% include menu.html %}

Le funzioni spesso non solo fanno qualcosa, ma restituiscono anche un risultato. Ad esempio, nella programmazione funzionale, le funzioni non dovrebbero produrre effetti collaterali come la stampa sulla console. Tuttavia, Raku non ti limita dal farlo. Vediamo come restituire un valore da una funzione e come ottenerlo nel codice chiamante.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Qui, la funzione chiamata `add` prende due numeri e restituisce la loro somma. Viene utilizzato un `return` esplicito. Dal lato chiamante, il valore che la funzione restituisce può essere utilizzato come qualsiasi altro valore. Nel programma sopra, viene assegnato a una variabile.

## L'ultimo valore valutato

In Raku, un `return` esplicito non è necessario se il risultato che vuoi restituire da una funzione è l'ultimo valore calcolato nel suo corpo. La nostra funzione `add` può essere semplificata:

```raku
sub add($x, $y) {
    $x + $y
}
```

Come avrai notato, non c'è un punto e virgola alla fine della riga poiché non è richiesto quando la riga termina il blocco di codice corrente.

Funzioni così banali e piccole sono spesso formattate in una singola riga per un codice più compatto:

```raku
sub add($x, $y) { $x + $y }
```

## Nessun dato di ritorno

Se hai bisogno di uscire da una funzione prima della fine del suo corpo, e la funzione non restituisce alcun risultato, usa un `return` senza argomenti.

```raku
sub test($x) {
    return if $x <= 10;
    say "$x is above the limit";
}
```

{% include nav.html %}