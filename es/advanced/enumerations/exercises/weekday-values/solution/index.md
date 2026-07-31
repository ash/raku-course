---
title: 'Solution: Números de días de la semana'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Puedes encontrar el código fuente en el archivo [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Salida

```
Fri
Mon
```

## Comentarios

1. Escribir las constantes como pares te permite elegir los números, en este caso comenzando desde `1`.

1. Llamar al tipo del enum como `Day(5)` realiza la búsqueda inversa: encuentra la constante cuyo valor es `5`, que es `Fri`. De igual manera, `Day(1)` devuelve `Mon`. Esto es lo inverso de `Fri.value`, que iría del nombre al número.

{% include nav.html %}
