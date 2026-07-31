---
title: Enviar y recibir
translations_gpt:
---

{% include menu.html %}

Crea un canal con `Channel.new`. Mete valores con `.send` y sácalos con `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Un canal es una **cola**: los valores salen en el mismo orden en que entraron, el primero en entrar es el primero en salir. Así que el primer `.receive` devuelve `1`, el valor enviado primero.

La gracia de un canal está en que enviar y recibir se pueden hacer sin peligro desde **hilos distintos** al mismo tiempo. Un productor puede seguir enviando mientras un consumidor sigue recibiendo, y Raku se asegura de que ningún valor se pierda ni se duplique:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Aquí una tarea en segundo plano envía `1, 2, 3`; el programa principal recibe. `.receive` espera si el canal está momentáneamente vacío, así que el consumidor nunca se adelanta al productor.

{% include nav.html %}
