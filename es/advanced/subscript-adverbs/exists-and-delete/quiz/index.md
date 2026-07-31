---
title: Quiz — Adverbios de subíndice
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

{:.quiz}
0 | True
1 | False
0 | Nil
0 | (Any)

{% include quiz.html %}

<div class="extended-explanation">

El adverbio `:exists` pregunta si la clave está presente y devuelve un valor booleano. No hay ninguna clave `z` en el hash, por lo que la respuesta es `False`.

</div>

{% include nav.html %}
