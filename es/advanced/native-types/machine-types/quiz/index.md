---
title: Quiz — Tipos nativos
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

Cuando introspecciones un valor nativo, se _encapsula_ automáticamente en el tipo completo correspondiente. Así que aunque `$n` se declare como un `int` nativo, al preguntar por su nombre de tipo mediante `.^name` se reporta el encapsulado `Int`.

</div>

{% include nav.html %}
