---
title: 'Solución: Sume un canal'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 Puedes encontrar el código fuente en el archivo [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Salida

```
21
```

## Comentarios

1. La promesa productora envía los seis valores en un hilo y cierra el canal. La promesa consumidora, en otro hilo, usa `.list` para recoger todo hasta el cierre y devuelve la suma (`[+]` suma `1 + 2 + … + 6`).

1. `await $producer, $consumer` espera **ambas** promesas y devuelve sus resultados en orden. El resultado del productor no hace falta aquí (`$sent`); el del consumidor es la suma, `21`. El canal es lo que lleva con seguridad los valores del hilo productor al hilo consumidor.

{% include nav.html %}
