---
title: Parametri tipizzati delle funzioni
---

{% include menu.html %}

I parametri delle funzioni in Raku possono essere limitati dal tipo. Questo è molto simile alle [variabili tipizzate](/it/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

La funzione ora richiede che i suoi argomenti siano numeri interi.

```raku
say add(10, 20);
# say add(pi, e); # Errore
```

Un tentativo di passare un parametro di qualsiasi altro tipo diverso da `Int` genera un errore di compilazione.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Nota che Raku non convertirà automaticamente i tipi anche se è possibile in altri casi.

```raku
# say add('3', '4'); # Errore
say '3' + '4'; # OK ed è 7
```

%%tipblock
## Come capire se è un errore di compilazione
Se il messaggio di errore inizia con `===SORRY!=== Error while compiling`, significa che l'errore è avvenuto durante la compilazione.
%%/tipblock

{% include nav.html %}