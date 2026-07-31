---
title: 'Solution: Usar el convertidor'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución a la tarea.

## Código

El programa, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Puedes encontrar ambos archivos fuente en el directorio [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Salida

```console
$ raku -I. temperature.raku 100
212
```

## Comentarios

1. `use Temperature` carga el módulo e importa su subrutina exportada `c-to-f`, para que el programa pueda llamarla directamente.

1. `sub MAIN($celsius)` recibe el argumento de línea de comandos, de modo que la temperatura a convertir se elige al ejecutar el programa en lugar de estar codificada. Si se ejecuta sin argumento, Raku imprime un mensaje de uso automáticamente.

1. El módulo debe ser accesible, por lo que el programa se ejecuta con `-I.` para que Raku busque `Temperature.rakumod` en el directorio actual. La conversión de `100` °C da `212` °F.

{% include nav.html %}
