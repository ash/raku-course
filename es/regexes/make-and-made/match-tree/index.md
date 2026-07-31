---
title: El árbol de coincidencias
translations_gpt:
---

{% include menu.html %}

Una coincidencia de gramática es un árbol. La coincidencia de arriba tiene una entrada con nombre por cada token que usó `TOP`, y esas entradas son a su vez objetos de coincidencia con sus propias capturas. Recorres el árbol con la misma sintaxis `<nombre>` que usas para las capturas con nombre:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Cada rama es un objeto de coincidencia completo, así que puedes pedirle su `.Str`, su posición o convertirlo. Aquí el valor son dígitos, de modo que convertirlo en un número de verdad es solo una llamada a un método:

```raku
say $m<value>.Int; # 5
```

En gramáticas más profundas el árbol tiene más niveles: `$m<a><b>` llega a un token `b` usado dentro de un token `a`. Recorrer el árbol así funciona, pero para algo más que un par de campos se vuelve incómodo. El tema siguiente muestra una forma más limpia de adjuntar a cada coincidencia el valor que de verdad quieres.

{% include nav.html %}
