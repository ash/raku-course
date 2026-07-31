---
title: Quiz — Adverbios
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? Fíjate en el adverbio `:s` y en la serie de espacios del texto.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

El adverbio `:s` hace significativo el espacio entre `hello` y `world` del patrón: exige que ahí haya espacio en blanco. Uno o más espacios valen todos, así que la serie de tres espacios del texto coincide y el resultado es `True`. Sin `:s`, el espacio del patrón se ignoraría y el patrón buscaría `helloworld`.

</div>

{% include nav.html %}
