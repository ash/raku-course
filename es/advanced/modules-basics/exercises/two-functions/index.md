---
title: Dos funciones en un módulo
translations_gpt:
---

{% include menu.html %}

## Problema

Crea un módulo llamado `Calc`, en un archivo `Calc.rakumod`, que exporte dos subrutinas: `add` y `mul`, que devuelvan la suma y el producto de sus dos argumentos.

Luego escribe un programa separado que use el módulo para imprimir `add(3, 4)` y `mul(3, 4)`, cada uno en su propia línea.

## Ejemplo

Al ejecutar con el módulo en la ruta de búsqueda, el programa imprime:

```console
$ raku -I. calc.raku
7
12
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
