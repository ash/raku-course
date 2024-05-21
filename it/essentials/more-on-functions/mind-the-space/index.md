---
title: Attenzione allo spazio
---

{% include menu.html %}

Usare le funzioni in Raku è per lo più intuitivo e non causa problemi, ma devi essere avvertito riguardo al seguente aspetto.

## TL;DR

Non aggiungere uno spazio tra il nome della funzione e le parentesi con i suoi argomenti. Ma usa uno spazio dopo `for` e `if`.

## Storia lunga

Prendiamo una semplice funzione:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Prima di tutto, nota l'assenza di spazi tra il nome della funzione e la parentesi aperta che contiene i parametri. Alcuni stili di codifica in altre lingue possono richiedere uno spazio lì. Raku va bene con questo, ma non è una pratica da seguire:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

Dal lato della chiamata, l'assenza di spazio è importante. Se chiami la funzione e ometti le parentesi, allora lo spazio dopo il nome della funzione è inevitabile:

```raku
f 5, 6;
```

Ma se aggiungi le parentesi, non puoi avere uno spazio prima di esse. Questa è una chiamata corretta:

```raku
f(5, 6);
```

E questa chiamata è sbagliata:

```raku
f (5, 6);
```

Tale codice causa un'eccezione:

    Too few positionals passed; expected 2 arguments but got 1
      sub f at t.raku line 1
      in block <unit> at t.raku line 5

Raku vede la chiamata con uno spazio `f (5, 6)` come un tentativo di passare un singolo argomento `(5, 6)` alla funzione. Puoi facilmente controllare il tipo di questo argomento se riscrivi la funzione per accettare solo un argomento:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Quindi, chiamare `f (5, 6)` significa che stiamo passando una [lista](/it/essentials/positionals/lists) alla funzione. La lista come entità singola.

## Quando è necessario lo spazio

In alcuni casi, il carattere spazio è necessario. Questo accade quando usi le parentesi con una delle parole chiave, come `if` o `for` o `loop`. Il seguente codice è sbagliato:

```raku
if(True != False) {
    say 'OK';
}
```

Il messaggio di errore spiega cosa c'è di sbagliato:

    ===SORRY!===
    The word 'if' is interpreted as a 'if()' function call.  Please use
    whitespace instead of parentheses.
    at /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unexpected block in infix position (two terms in a row)
    at /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

Nel caso di `if`, le parentesi non sono affatto necessarie, quindi il problema non ha possibilità di apparire se non le usi. Ma in alcuni casi, come, ad esempio, con `loop`, devi averle, e lo spazio diventa obbligatorio:

```for
loop(my $c = 0; $c != 10; $c++) { say $c }
```

In questo codice, accade la stessa cosa: `loop(...)` è interpretato dal compilatore come una chiamata di funzione. Aggiungi uno spazio per risolvere il problema. O meglio riscrivi il frammento usando `for`.

## Conclusione

In sintesi: per evitare tali problemi, non aggiungere uno spazio tra il nome della funzione e le parentesi con gli argomenti della funzione e cerca di evitare le parentesi se possibile con altre costruzioni del linguaggio come il controllo del flusso.

{% include nav.html %}