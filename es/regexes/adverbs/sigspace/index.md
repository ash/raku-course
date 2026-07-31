---
title: Espacios significativos
translations_gpt:
---

{% include menu.html %}

Dentro de un regex, los espacios se ignoran normalmente: están ahí solo para hacer legible el patrón. Por eso `/foo bar/` empareja `foobar`. A veces, sin embargo, sí quieres que un espacio del patrón signifique «aquí hay espacio en blanco». El adverbio `:s` (abreviatura de `:sigspace`, «espacio significativo») hace exactamente eso:

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Con `:s`, el espacio entre `foo` y `bar` en el patrón exige espacio en blanco entre las dos palabras de la cadena. Uno o más espacios (o tabuladores) valen todos, así que la serie de espacios de `'foo    bar'` coincide.

Los espacios significativos cobran especial importancia con las gramáticas, donde te permiten escribir patrones que se leen como el lenguaje que estás analizando. Volverás a encontrártelos como la diferencia entre un `token` y una `rule`.

{% include nav.html %}
