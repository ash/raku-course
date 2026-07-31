---
title: Repaso del comportamiento de operadores
translations_gpt:
---

{% include menu.html %}

Cuando una expresión contiene varios operadores, Raku tiene que decidir en qué orden aplicarlos. Dos reglas gobiernan esto: la _precedencia_ y la _asociatividad_.

## Precedencia

La precedencia decide qué operador se vincula con más fuerza. La multiplicación tiene mayor precedencia que la suma, por lo que se ejecuta primero:

```raku
say 2 + 3 * 4; # 14
```

La expresión se lee como `2 + (3 * 4)`, dando `14` en lugar de `20`. Siempre puedes usar paréntesis para forzar un orden diferente:

```raku
say (2 + 3) * 4; # 20
```

## Asociatividad

La asociatividad decide el orden entre operadores de la _misma_ precedencia. La resta es asociativa por la izquierda, así que se agrupa desde la izquierda:

```raku
say 8 - 3 - 2; # 3
```

Esto es `(8 - 3) - 2`, que es `3`. La exponenciación, por otro lado, es asociativa por la derecha:

```raku
say 2 ** 3 ** 2; # 512
```

Aquí la expresión se agrupa como `2 ** (3 ** 2)`, es decir `2 ** 9`, que es `512`.

## Comparaciones encadenadas

Los operadores de comparación pueden _encadenarse_, lo que se lee de forma natural y hace lo que esperas desde las matemáticas:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

El valor del medio se compara con ambos vecinos: `1 < 2 < 3` es verdadero porque tanto `1 < 2` como `2 < 3` son verdaderos.

{% include nav.html %}
