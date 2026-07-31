---
title: La variable de tema
translations_gpt: true
---

{% include menu.html %}

## Problema

`$_` es la variable *tópico*. Un bucle `for` la establece con cada elemento sucesivamente, y una llamada a método escrita con un punto inicial sin invocante — como `.chars` — actúa sobre ella, por lo que `.chars` significa `$_.chars`.

Recorre las tres cadenas `'apple'`, `'fig'` y `'cherry'`. Para cada una, imprime una línea con el formato `<palabra> has <n> letters`, usando el tópico `$_` para la palabra y una llamada con punto inicial `.chars` para su longitud. Observa cómo `$_` se convierte en cada cadena sucesivamente.

## Ejemplo

El programa imprime:

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
