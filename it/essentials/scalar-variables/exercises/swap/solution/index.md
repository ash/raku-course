---
title: Soluzione di 'Scambia i valori'
---

{% include menu.html %}

In questo programma, utilizziamo gli elementi della sintassi di Raku dalla sezione sulle [variabili scalari](/it/essentials/scalar-variables).

## Codice

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Puoi trovare il codice sorgente nel file [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Output

Esegui il programma e conferma che stampa i valori in ordine diverso.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Commenti

Tutti i passaggi di questo programma (creazione di una variabile e assegnazione dei valori, scambio degli stessi e stampa) utilizzano entrambe le variabili nella stessa costruzione. La cosa più interessante qui è il modo in cui le variabili scambiano i loro valori:

```raku
($a, $b) = $b, $a;
```

Nota che hai bisogno delle parentesi sul lato sinistro, ma puoi anche aggiungerle sul lato destro:

```raku
($a, $b) = ($b, $a);
```

Cosa succede se ometti le parentesi?

```raku
$a, $b = $b, $a;
```

In questo caso, ricevi un avviso che `$a` sul lato destro non viene utilizzato:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

La riga sopra è in realtà equivalente a un'assegnazione inutile `$b = $b`. Puoi facilmente vederlo se modifichi i valori sul lato destro, per esempio:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Questo programma stampa ancora più avvisi, ma puoi anche vedere che solo `$b` ha cambiato il suo valore:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% include nav.html %}