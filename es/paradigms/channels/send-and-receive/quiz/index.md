---
title: Quiz — Canales
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $c = Channel.new;
$c.send(10);
$c.send(20);
say $c.receive;
```

{:.quiz}
1 | 10
0 | 20
0 | 30
0 | (10 20)

{% include quiz.html %}

<div class="extended-explanation">

Un canal es una cola en la que el primero en entrar es el primero en salir. `10` se envió primero, así que el primer `.receive` devuelve `10`.

</div>

{% include nav.html %}
