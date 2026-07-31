---
title: 'Solution: Un paquete'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Puedes encontrar el código fuente en el archivo [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Salida

```
0
212
```

## Comentarios

1. Tanto la variable como la subrutina se declaran con `our`, por lo que ambas pasan a formar parte del espacio de nombres `Temperature` y son accesibles desde afuera.

1. La variable se accede como `$Temperature::freezing` — sigilo, nombre del paquete y luego nombre de la variable — mientras que la subrutina se llama como `Temperature::fahrenheit(100)`. Convertir `100` da `100 * 9/5 + 32`, que es `212`.

1. Un `package` simple proporciona solo el espacio de nombres. Para una biblioteca reutilizable habríamos usado `module` en su lugar — y, una vez que los objetos entran en juego, una `class` — pero el mecanismo de espacio de nombres es el mismo en cada caso.

{% include nav.html %}
