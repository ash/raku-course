---
title: Confronto dei numeri
---

{% include menu.html %}

Per confrontare due numeri, utilizza i seguenti operatori. Tutti sono abbastanza ovvi se hai familiarità con altri linguaggi di programmazione.

`==` | Uguale
`!=` | Diverso
`<` | Minore di
`<=` | Minore o uguale
`>` | Maggiore di
`>=` | Maggiore o uguale

## Approssimativamente uguale

Oltre agli operatori standard, Raku aggiunge l'operatore approssimativamente uguale `=~=`, che confronta i numeri in modo approssimativo. Il suo risultato è `True` se i due numeri sono relativamente vicini tra loro. La differenza relativa massima non deve superare il valore integrato `$*TOLERANCE`, che è pari a `1e-15`.

## Versioni Unicode

Alcuni degli operatori sopra menzionati hanno i loro equivalenti Unicode:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Esempi

Alcuni esempi con gli operatori che confrontano i numeri:

```raku
say 10 == 10; # True
say 10 != 10; # False

say 15 < 10;  # False
say 10 <= 10; # True
say 16 > 10;  # True
say 10 >= 14; # False

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # True
say 2e17 + 1 =~= 2e17 + 100; # True
```

Nota che il numero `1.000000000000000000000001` è un numero `Rat`, quindi non perdi precisione in un'espressione con un numero vicino `1.000000000000000000000002`. L'ultimo esempio con `2e17` opera con numeri `Num`, che hanno una precisione limitata.

{% include nav.html %}