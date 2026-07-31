---
title: 'Solución: Reciba un valor'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Puedes encontrar el código fuente en el archivo [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Salida

```
a
```

## Comentarios

1. Un canal devuelve los valores en el orden en que se enviaron.

1. `'a'` se envió primero, así que el primer `.receive` lo devuelve.

{% include nav.html %}
