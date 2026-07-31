---
title: Quiz — `when`
---

{% include menu.html %}

¿Que imprime el siguiente programa?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | both lines
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

Un bloque `when` automáticamente *sale* del `given` después de coincidir — no hay fall-through. `5` satisface la primera condición `$_ > 0`, por lo que se imprime `positive` y el segundo `when 5` nunca se alcanza, aunque también habría coincidido.

</div>

{% include nav.html %}
