---
title: 'Solution: Contare'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Puoi trovare il codice sorgente nel file [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Output

```
9
10
```

## Commenti

1. `++` è un operatore postfisso: viene dopo il suo operando. Usato come espressione, `$n++` restituisce prima il *vecchio* valore `9`, che è ciò che `say` stampa, e solo dopo incrementa la variabile.

1. La seconda riga mostra che `$n` è effettivamente diventato `10`. (La forma prefissa `++$n` invece incrementerebbe prima e restituirebbe `10`.)

{% include nav.html %}
