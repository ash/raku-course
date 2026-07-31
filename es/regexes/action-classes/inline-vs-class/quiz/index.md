---
title: Quiz — Clases de acción
translations_gpt:
---

{% include menu.html %}

¿Cómo le dices a `.parse` que use una clase de acciones llamada `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

El objeto de acciones se pasa con el argumento con nombre `actions`, y debe ser una **instancia**, creada con `.new`. Mientras la gramática analiza, los métodos de los tokens correspondientes de esa instancia se ejecutan y construyen el resultado.

</div>

{% include nav.html %}
