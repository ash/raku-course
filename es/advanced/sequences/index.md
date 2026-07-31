---
title: Secuencias
translations_gpt:
---

{% include menu.html %}

Una _secuencia_ es una serie ordenada de valores producidos uno tras otro. Raku construye secuencias con el operador `...`, que deduce el patrón a partir de los valores que le proporcionas y genera el resto hasta un punto final.

El caso más simple cuenta de un valor a otro:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Si proporcionas dos valores iniciales, Raku toma el paso entre ellos y continúa con el mismo paso. Así es como se crea una secuencia aritmética:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Aquí los valores iniciales `1, 3` establecen el paso en dos, así que Raku cuenta de dos en dos y se detiene al alcanzar `11`.

El valor producido por `...` es del tipo `Seq`:

```raku
say (1 ... 5).WHAT; # (Seq)
```

Los siguientes temas muestran otros patrones que el operador `...` puede reconocer, y cómo una secuencia puede ser perezosa (lazy), incluso infinita.

{% include nav.html %}
