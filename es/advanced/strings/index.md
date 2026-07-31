---
title: Cadenas
---

{% include menu.html %}

En la parte de Esenciales aprendiste [cómo construir cadenas](/es/essentials/strings) — concatenación, interpolación y la longitud de una cadena. Las cadenas también poseen un rico conjunto de métodos. Esta sección recopila los más útiles. (La búsqueda con [expresiones regulares](/es/regexes) es un tema aparte más amplio, que se cubre en su propia parte más adelante.)

Tres métodos cambian las mayúsculas y minúsculas de una cadena:

```raku
say 'raku'.uc; # RAKU  — upper case
say 'RAKU'.lc; # raku  — lower case
say 'raku'.tc; # Raku  — title case (first letter capitalised)
```

El método `flip` invierte los caracteres de una cadena:

```raku
say 'Raku'.flip; # ukaR
```

Y el operador `x` repite una cadena un número determinado de veces:

```raku
say 'ab' x 3; # ababab
```

Los siguientes temas muestran cómo buscar dentro de cadenas y cómo dividirlas en partes y volver a unirlas.

{% include nav.html %}
