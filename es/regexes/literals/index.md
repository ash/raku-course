---
title: Literales y clases de caracteres
translations_gpt:
---

{% include menu.html %}

Un _regex_ (abreviatura de _regular expression_, expresión regular) es un patrón que describe un fragmento de texto. Con un regex puedes hacer preguntas como «¿contiene esta cadena un número?» o «¿empieza esta palabra por mayúscula?», y puedes extraer piezas de una cadena o cambiarlas.

Raku tiene regex especialmente potentes y legibles, integrados directamente en el lenguaje. La forma más sencilla de escribir uno es entre dos barras:

```raku
/cat/
```

Este patrón empareja las tres letras `c`, `a`, `t` seguidas. Para comprobar una cadena contra un patrón, usa el operador de emparejamiento inteligente `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Cuando el patrón se encuentra, Raku informa de la parte de la cadena que coincidió, mostrada entre las esquinas `｢ ｣`. Examinarás este resultado más de cerca en la sección siguiente.

En esta primera sección aprenderás a emparejar texto exacto (_literal_) y a emparejar un carácter que puede ser uno de varios: una _clase de caracteres_. Las secciones siguientes añaden los [cuantificadores](/es/regexes/quantifiers), las [capturas](/es/regexes/captures) y todo lo demás que hace tan útiles a los regex.

{% include nav.html %}
