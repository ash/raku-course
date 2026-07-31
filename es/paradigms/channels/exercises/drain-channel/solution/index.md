---
title: 'Solución: Vacíe un canal'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Puedes encontrar el código fuente en el archivo [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Salida

```
a,b
```

## Comentarios

1. `.list` vacía en orden todos los valores que quedan en el canal cerrado.

1. `.join(',')` pega las dos cadenas con una coma entre ellas.

{% include nav.html %}
