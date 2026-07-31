---
title: Alcance de los adverbios
translations_gpt:
---

{% include menu.html %}

El adverbio `:i` se puede escribir en dos sitios, y la diferencia está en **dónde surte efecto**. Sobre el operador, `m:i/…/` hace insensible a las mayúsculas **todo** el patrón. Escrito dentro del regex, `:i` es _posicional_: se aplica solo a partir del punto donde aparece. Eso te permite relajar la regla de las mayúsculas solo para una parte del patrón:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Aquí la `R` inicial se sigue emparejando distinguiendo mayúsculas — de ahí que el minúsculo `raku` falle —, mientras que `:i` hace insensible a las mayúsculas solo el `aku` que le sigue. Con `m:i/Raku/`, en cambio, todas las letras son insensibles a las mayúsculas, así que coinciden tanto `RAKU` como `raku`.

## Confinado a un grupo

El efecto de un adverbio interno también queda confinado al grupo que lo contiene. En `/[:i abc]def/` solo `abc` ignora las mayúsculas; el `def` posterior al grupo se empareja de forma estricta:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Desactivar un adverbio

Para volver a desactivar un adverbio a mitad de patrón, niégalo con un `!`. Así, `:!i` restablece la distinción de mayúsculas a partir de ese punto:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` relaja la regla de las mayúsculas para `abc` y después `:!i` la restablece, de modo que `def` debe coincidir exactamente. La agrupación y `:!i` son dos maneras de llegar al mismo objetivo: limitar un adverbio a la parte del patrón que lo necesita. El mismo interruptor de encendido y apagado funciona también con los demás adverbios internos al patrón.

{% include nav.html %}
