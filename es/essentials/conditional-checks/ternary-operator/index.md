---
title: Operador ternario
---

{% include menu.html %}

El operador ternario en Raku es una construcción de dos partes `??` ... `!!`. Una prueba booleana es seguida por dos expresiones, una de las cuales se ejecuta dependiendo del resultado de la prueba.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

Con el valor actual de la variable `$shines`, este programa imprime `day`. Si lo cambias a `Moon`, el resultado será `night`.

Es posible encadenar expresiones ternarias. Solo asegúrate de que no se vuelva demasiado complicado.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Aquí, dependiendo del valor en `$hours`, se informará una parte diferente del día.

{% include nav.html %}