---
title: Arreglos anidados
---

{% include menu.html %}

Los arreglos pueden contener cualquier otro dato, incluidos otros arreglos. Para delimitar los bordes de los arreglos anidados, usa corchetes:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

También es posible tener un par más de corchetes para el arreglo de nivel superior. El siguiente ejemplo muestra la misma estructura de datos que antes.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Para acceder a los elementos internos, añade tantos índices como sea necesario. Un solo par de corchetes desciende un nivel más en la estructura:

```raku
say @table[0][3]; # Imprime 4
say @table[2][1]; # Imprime 200 
```


{% include nav.html %}