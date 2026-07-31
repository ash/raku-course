---
title: Espacios significativos en las reglas
translations_gpt:
---

{% include menu.html %}

Una `rule` es un `token` con una funcionalidad más activada: `:sigspace` (espacio significativo), exactamente el adverbio `:s`. Convierte el espacio en blanco que escribes en el patrón en un emparejador automático de espacio en blanco entre las partes. Eso es lo que quieres siempre que el texto que analizas tenga espacios entre sus piezas.

Compara ambos. En un `token`, el espacio en blanco del patrón se **ignora**, así que `<first> <second>` pide las dos partes sin nada en medio. Como `\w+` se detiene en el espacio, una entrada con espacios no encuentra coincidencia:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

*Puedes* aceptar el espacio en un `token`: solo tienes que emparejarlo tú mismo, por ejemplo con `\s+`:

```raku
token TOP { <first> \s+ <second> }      # now 'foo bar' parses
```

Una `rule` inserta ese emparejamiento de espacio en blanco por ti, así que basta con escribir un espacio entre las partes:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Un patrón habitual es usar `rule` para la estructura de nivel superior — donde las partes están separadas por espacios — y `token` para las piezas pequeñas como nombres y números, que no contienen espacios. Eso mantiene tu gramática a la vez correcta y fácil de leer.

{% include nav.html %}
