---
title: Quiz — Crear gramáticas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` solo funciona cuando la gramática empareja la cadena **entera**. `\w+` empareja `hello`, pero después sobran un espacio y `world`, así que la entrada no se consume por completo: `.parse` devuelve `Nil` y `.defined` es `False`.

</div>

{% include nav.html %}
