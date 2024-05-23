---
title: Tabulae nidificatae
---

{% include menu.html %}

Tabulae possunt continere quaelibet alia data, inclusis aliis tabulis. Ad delimitanda confinia tabularum nidificatarum, utere claudibus quadratis:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

Etiam possibile est habere unam par claudium pro tabula summi gradus. Proximum exemplum eandem structuram datam ac prius ostendit.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Ad accedendum ad res interiores, adde tot indices quot necessarii sunt. Unum par claudium quadratarum descendit unum gradum altius in structuram:

```raku
say @table[0][3]; # Imprimit 4
say @table[2][1]; # Imprimit 200 
```


{% include nav.html %}