---
title: Usare unit sub
---

{% include menu.html %}

Il costrutto `unit sub` è un modo pratico per rendere il resto del file il corpo della funzione! Quando viene usato con `MAIN`, permette di eliminare le parentesi graffe che abbracciano praticamente tutto il file, così come l'indentazione non necessaria.

L'uso di `unit sub` è dimostrato nel seguente esempio di un programma.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "La somma di $a e $b è $sum.";
```

La funzione `MAIN` è l'unica funzione in questo file. Se questo è anche il caso del tuo programma, considera di usare `unit sub MAIN` come mostrato sopra.

{% include nav.html %}