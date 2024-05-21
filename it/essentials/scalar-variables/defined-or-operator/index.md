---
title: L'operatore defined-or
---

{% include menu.html %}

Usa il cosiddetto operatore _defined-or_ `//` per ottenere un valore di fallback se una variabile non è ancora impostata.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Questo programma stampa:

```
alpha
delta
```

Il valore di `$a` è impostato nella prima riga, quindi nell'espressione `$a // 'gamma'`, viene utilizzato il valore corrente di `$a`. Al contrario, la variabile `$b` non è stata inizializzata, quindi `$b // 'delta'` restituisce l'operando a destra, e il programma stampa `delta`.

## //=

La combinazione di `//` e `=` dà l'operatore `//=` che assegna un valore se la variabile non è definita.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}