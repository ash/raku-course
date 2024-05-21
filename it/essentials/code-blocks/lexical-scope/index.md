---
title: Ambito lessicale
---

{% include menu.html %}

Un blocco di codice crea il cosiddetto ambito lessicale. Le variabili dichiarate nel blocco corrente sono visibili al suo interno, ma non dopo che il programma esce dal blocco. Consideriamo un esempio:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

La variabile `$x` viene creata nel blocco di codice. La prima chiamata di `say $x` stampa il valore della variabile poiché è visibile all'interno del blocco. La seconda `say $x` fallisce perché il nome `$x` non esiste al di fuori del blocco e non è conosciuto dopo la sua fine. Il programma non si compila e si ottiene un errore:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}