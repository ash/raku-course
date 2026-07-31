---
title: Recibir más allá del final
translations_gpt:
---

{% include menu.html %}

¿Qué ocurre si llamas a `.receive` más veces de las que hay valores que tomar? La respuesta depende de si el canal se ha **cerrado**.

Toma el ejemplo de productor y consumidor de antes: una tarea en segundo plano envía tres valores y cierra el canal. ¿Y si el consumidor pide un cuarto?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # one receive too many
```

## En un canal cerrado, un receive de más lanza una excepción

Cerrar no tira los valores que ya están en cola: las tres llamadas a `.receive` de arriba siguen devolviendo `1`, `2` y `3`. Pero una vez que el canal está cerrado **y** vacío, ya no puede llegar ningún valor más, así que en lugar de dejarte esperar para siempre, Raku lanza una excepción:

```
Cannot receive a message on a closed channel
```

La excepción es `X::Channel::ReceiveOnClosed`. Esto es de ayuda más que un fastidio: le dice al consumidor, sin lugar a dudas, que ha vaciado el canal. En la práctica evitas encontrártela consumiendo con `.list` (que se detiene limpiamente en el cierre) o iterando solo mientras queden valores, ambas cosas mostradas en la página anterior.

## En un canal abierto, un receive de más se bloquea

Si el productor nunca cierra el canal, `.receive` no tiene manera de saber si aún viene otro valor, así que simplemente **espera**:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # waits here — the channel is open but empty
```

El programa se queda colgado en el segundo `.receive`, porque *podría* enviarse todavía un valor. Este es el peligro del que avisaba la página anterior: olvida el `.close` y una «espera al valor siguiente» normal se convierte en una espera que no termina nunca.

Así que los dos desenlaces son opuestos, de una manera útil. Un canal **cerrado** falla enseguida cuando está vacío: obtienes una excepción que puedes ver y capturar. Un canal **abierto** sigue esperando, exactamente lo correcto mientras un productor siga trabajando, pero un cuelgue silencioso si el productor se ha parado calladamente sin cerrar. Cerrar el canal es precisamente lo que convierte ese cuelgue silencioso en una señal clara de que el flujo ha terminado.

{% include nav.html %}
