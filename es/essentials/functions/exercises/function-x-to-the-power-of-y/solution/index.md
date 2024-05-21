---
title: 'Solución: Función para calcular xʸ'
---

{% include menu.html %}

En este programa, usa el operador `**` para calcular la potencia.

## Código

Aquí está la solución:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Encuentra el programa en el archivo [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Salida

Ejecuta el programa para confirmar que imprime las respuestas correctas:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Comentario

Esta función también funciona con potencias negativas, por ejemplo:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}