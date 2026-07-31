---
title: 'Solution: La variable de tema'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Puedes encontrar el código fuente en el archivo [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Salida

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Comentarios

1. Un bucle `for` establece la variable tópico `$_` con cada elemento sucesivamente, así que el bloque se ejecuta tres veces, con `$_` igual a `'apple'`, luego `'fig'` y luego `'cherry'`.

1. Dentro de la cadena, `$_` interpola la palabra actual, y la llamada con punto inicial `.chars` — abreviatura de `$_.chars` — devuelve su longitud. Ambas se refieren al mismo tópico, por eso el conteo siempre coincide con la palabra en la línea.

{% include nav.html %}
