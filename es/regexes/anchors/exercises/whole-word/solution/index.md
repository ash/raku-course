---
title: 'Solución: Una palabra entera'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Puedes encontrar el código fuente en el archivo [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Salida

```
｢is｣
```

## Comentarios

1. Las anclas `<<` y `>>` exigen un límite de palabra a cada lado de `is`.

1. Las letras `is` están también dentro de `this`, pero ahí no tienen ningún límite de palabra a la izquierda, así que el motor se salta esa aparición y empareja en su lugar la palabra suelta `is`.

1. Ambas candidatas imprimen el mismo `｢is｣`, así que ¿cómo sabes cuál coincidió realmente? Cambia el `is` escondido dentro de `this`, por ejemplo convirtiendo la cadena en `'thus is fine'`. La salida sigue siendo `｢is｣`, sin cambios, lo que demuestra que esa aparición nunca fue la coincidencia. Ahora cambia en cambio la palabra suelta (digamos `'this it fine'`) y la coincidencia desaparece (`Nil`). También puedes preguntarle a la coincidencia dónde empieza: `('this is fine' ~~ /<< is >>/).from` devuelve `5`, la posición del `is` suelto, y no `2`.

{% include nav.html %}
