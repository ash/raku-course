---
title: Principio y final de la cadena
translations_gpt:
---

{% include menu.html %}

Dos anclas marcan los extremos de la cadena:

* `^` coincide justo al **principio** de la cadena
* `$` coincide justo al **final**

Usa `^` para exigir que la coincidencia empiece al principio:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

La segunda cadena contiene `http`, pero no al principio, así que el patrón anclado falla.

Poner `^` y `$` alrededor de un patrón lo obliga a emparejar **toda** la cadena, sin que sobre nada a ninguno de los dos lados:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

Es un giro muy común para la validación, por ejemplo «¿es esta cadena exactamente un número?»:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Anclas de línea

Cuando una cadena tiene varias líneas, las compañeras `^^` y `$$` coinciden al principio y al final de **cada línea** en lugar de los de toda la cadena. La diferencia con `^` y `$` salta a la vista en cuanto el texto que buscas no está en la primera línea: las anclas simples solo ven la cadena entera y fallan, mientras que las dobles coinciden en cualquier línea.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Aquí `\n` empieza una segunda línea. `^^` exige que `dog` esté al principio de una línea y `$$` al final de una; ambas cosas se cumplen en la segunda línea, así que las anclas dobles funcionan donde las simples no pueden.

{% include nav.html %}
