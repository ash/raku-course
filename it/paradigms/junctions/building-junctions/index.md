---
title: Costruire junction
translations_gpt:
---

{% include menu.html %}

Il modo più semplice di costruire una junction è con gli operatori giuntivi. L'operatore `|` crea una junction _any_:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

Il valore `$j` sta per «1 oppure 2 oppure 3». Ci sono quattro generi di junction, ciascuno con un operatore e una funzione corrispondente:

* `any( … )` oppure `a | b` — vero se corrisponde **un valore qualunque**
* `all( … )` oppure `a & b` — vero se corrispondono **tutti** i valori
* `one( … )` oppure `a ^ b` — vero se corrisponde **esattamente un** valore
* `none( … )` — vero se **nessun** valore corrisponde (è l'unico genere senza forma a operatore: usa la funzione)

Le forme a funzione sono comode con un elenco:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Una junction è utilissima in un confronto. Chiedere se un numero è uguale a una junction _any_ lo mette alla prova contro ogni valore in una volta sola:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

La forma a operatore si legge altrettanto naturalmente — `1 | 2 | 3` è esattamente la stessa junction _any_:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

Il `so` trasforma il risultato giuntivo in un booleano semplice. L'argomento successivo guarda che cosa succede dietro le quinte quando lo fai.

{% include nav.html %}
