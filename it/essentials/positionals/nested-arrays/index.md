---
title: Array annidati
---

{% include menu.html %}

Gli array possono contenere qualsiasi altro dato, inclusi altri array. Per delimitare i confini degli array annidati, usa le parentesi quadre:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

È anche possibile avere un'altra coppia di parentesi quadre per l'array di livello superiore. Il prossimo esempio mostra la stessa struttura dati di prima.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Per accedere agli elementi interni, aggiungi tutti gli indici necessari. Una singola coppia di parentesi quadre scende di un livello più in profondità nella struttura:

```raku
say @table[0][3]; # Stampa 4
say @table[2][1]; # Stampa 200 
```


{% include nav.html %}