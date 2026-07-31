---
title: La rutina reduce
translations_gpt:
---

{% include menu.html %}

Cuando quieres reducir con una operación a medida en lugar de con un único operador con nombre, usa la rutina `reduce`. Recibe un bloque de dos argumentos y lo aplica a lo largo de la lista, arrastrando el resultado acumulado:

```raku
say (1..5).reduce(* + *); # 15
```

El bloque `* + *` tiene dos estrellas [Whatever](/es/advanced/whatever): la primera es el resultado obtenido hasta el momento, la segunda es el elemento siguiente. Así que `reduce` calcula `((((1 + 2) + 3) + 4) + 5)`, es decir `15`: lo mismo que `[+]`, pero escrito como bloque.

Para ver esos dos argumentos en acción, ponles nombre e imprime cada paso. Un bloque con flecha devuelve su última expresión, así que `$x + $y` es a la vez lo que el bloque imprime y el valor que devuelve a `reduce`:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Esto imprime:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Cada una de las cuatro primeras líneas es una llamada al bloque. `$x` es el resultado acumulado hasta ahora e `$y` es el elemento siguiente de la lista. La primerísima llamada recibe los dos primeros valores de la lista, `1` y `2`; cada llamada posterior recibe de vuelta el total del paso anterior como `$x` — `3`, luego `6`, luego `10` —, emparejado con el número siguiente como `$y`. El valor del bloque se convierte en el `$x` de la llamada siguiente, y el total final, `15`, es lo que devuelve `reduce` y lo que `say` imprime en la última línea.

Como el bloque puede ser cualquier cosa, `reduce` es más general. Por ejemplo, construye un valor paso a paso:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Cada paso multiplica el acumulador por diez y añade el dígito siguiente, convirtiendo los dígitos sueltos `1, 2, 3, 4` en el número `1234`.

Como los demás métodos que reciben bloques, `reduce` se lee bien con la forma de [llamada con dos puntos](/es/advanced/colon-calls), que prescinde de los paréntesis alrededor del bloque:

```raku
say (1..5).reduce: * + *; # 15
```

En resumen, `[op]` es la forma rápida para un operador con nombre, y `reduce` es la forma flexible para un bloque combinador arbitrario. Ambas pliegan una lista hasta un solo valor.

{% include nav.html %}
