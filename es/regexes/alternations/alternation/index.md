---
title: Alternativa
translations_gpt:
---

{% include menu.html %}

Separa dos o más alternativas con una barra vertical `|`. El patrón coincide si coincide **alguna** de ellas:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

El patrón probó `yes` y `no`; la cadena contiene `no`, así que eso es lo que coincidió.

Puedes enumerar tantas alternativas como quieras:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Las alternativas pueden ser cualquier subpatrón, no solo palabras literales: pueden contener clases de caracteres, cuantificadores y capturas. Para mantener unida una alternativa dentro de un patrón mayor, agrúpala con corchetes `[ ]`, que [agrupan **sin** capturar](/es/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Aquí la alternativa `cat | dog` es una sola unidad, y debe ir seguida de `house`.

{% include nav.html %}
