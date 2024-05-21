---
title: Operazioni con i numeri
---

{% include menu.html %}

Non c'è dubbio che tu già conosca alcune delle operazioni che puoi fare con i numeri in Raku. Solo per menzionare che il simbolo dell'_operazione_ è chiamato _operatore_. Gli oggetti su cui eseguiamo operazioni sono chiamati _operandi_.

## Aritmetica

**Operatore** | **Operazione**
`+` | Addizione
`-` | Sottrazione
`*` | Moltiplicazione
`/` | Divisione

Poiché Raku [supporta Unicode](/it/essentials/on-unicode) molto bene, alcuni di questi operatori hanno equivalenti non ASCII:

`×` | Moltiplicazione
`÷` | Divisione

Per cambiare l'ordine di esecuzione, usa le parentesi:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Modulo

L'operatore modulo è `%` come in molti altri linguaggi.

`%` | Modulo

Restituisce il resto della divisione intera di due numeri, quindi `10 % 3` è `1`. Nota che `-10 % 3` è `2` poiché il risultato dell'operazione è definito come la differenza tra il primo numero e la divisione arrotondata per difetto moltiplicata per il secondo numero. Quindi, `$a % $b` è equivalente a `$a - $b * floor($a / $b)`.

## Divisibilità

Raku aggiunge un operatore utile per testare se un numero è divisibile per un altro numero.

`%%` | Divisibilità

Questo è un operatore infisso che necessita di due operandi: `10 %% 3`. Se il primo operando è divisibile per il secondo operando, il risultato è un Booleano `True`. Altrimenti, `False`.

## Operazioni intere

Ci sono operazioni speciali che restituiscono risultati interi. I loro operatori sono parole invece di simboli.

`div` | Divisione intera
`mod` | Modulo intero

L'operatore `div` arrotonda per difetto il risultato, quindi `10 div 3` è `3`, e `-10 div 3` è `-4`.

Sia `div` che `mod` si aspettano operandi interi. Quindi, il seguente programma non funzionerà se decommenti le righe contrassegnate come `Error`:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Error

say 10.3 / 3.3;     # OK
# say 10.3 div 3.3; # Error
```

## Potenza

Ci sono due modi per ottenere il risultato di _x_ alla potenza di _y_. Prima, puoi usare l'operatore `**`:

```raku
say 3 ** 4; # 81
```

Secondo, puoi usare le cifre in apice, per esempio:

```raku
say 3⁴; # 81
```

È possibile mettere più di una cifra in apice per ottenere il valore di una potenza maggiore di 9. Per esempio:

```raku
say 2¹⁵; # 32768
```

Anche la potenza negativa non è un problema:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Nota che il risultato delle ultime due espressioni è un numero `Rat`.

## Operazioni con assegnazione

Tutte le operazioni supportano la sintassi abbreviata quando è necessario aggiornare la variabile. Dimostriamolo con l'esempio di `+`.

La forma completa

```raku
$a = $a + $b;
```

è equivalente a:

```raku
$a += $b;
```

{% include nav.html %}