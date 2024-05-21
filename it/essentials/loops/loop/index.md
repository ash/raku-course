---
title: loop
---

{% include menu.html %}

L'istruzione `loop` è una costruzione in Raku che ha molto in comune con i cicli tradizionali nel linguaggio di programmazione C e i suoi parenti. Prende tre istruzioni: l'inizializzatore, il test e l'istruzione per modificare la variabile del ciclo. Il corpo del ciclo viene eseguito ripetutamente mentre il test rimane `True`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "Il valore attuale del contatore è $c.";
}
```

Qui, `++` è un operatore postfisso che incrementa il suo argomento di 1. Tratteremo più operatori nella seconda parte del corso.

Il programma esegue il corpo del ciclo cinque volte.

```console
$ raku t.raku
Il valore attuale del contatore è 0.
Il valore attuale del contatore è 1.
Il valore attuale del contatore è 2.
Il valore attuale del contatore è 3.
Il valore attuale del contatore è 4.
```

Alcune, o anche tutte, le istruzioni nell'intestazione di `loop` possono essere omesse. Ad esempio, ecco lo stesso programma:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "Il valore attuale del contatore è $c.";
    $c++;
}
```

## * * *

I cicli `loop` sono, probabilmente, i cicli meno utilizzati in Raku. Possono essere trovati, ad esempio, in un traduttore automatico da C a Raku. In Raku, però, ci sono cicli più comodi come `for`, che esamineremo molto presto.

{% include nav.html %}