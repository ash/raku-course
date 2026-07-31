---
title: La regla TOP
translations_gpt:
---

{% include menu.html %}

Cuando analizas una cadena con una gramática, Raku empieza por un token llamado `TOP`. Es el punto de entrada: la descripción de la entrada **entera**. Todo lo demás en la gramática existe para sostenerlo.

Un token `TOP` suele referirse a otros tokens por su nombre, dividiendo el problema en partes más pequeñas:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Lee `TOP` en voz alta: «una clave, después un signo igual, después un valor». Los tokens `key` y `value` dicen qué aspecto tiene cada una de esas partes. Esta división es todo el sentido de una gramática: cada token tiene un cometido pequeño y claramente nombrado, y `TOP` los ensambla.

`TOP` es solo una convención que impone `.parse`; a los demás tokens puedes ponerles el nombre que quieras. Los nombres que elijas se convierten además en las capturas con nombre del resultado, así que una gramática bien nombrada produce un árbol de coincidencias que se describe a sí mismo, como verás enseguida.

{% include nav.html %}
