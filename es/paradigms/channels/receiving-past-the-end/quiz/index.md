---
title: Quiz — Recibir más allá del final
translations_gpt:
---

{% include menu.html %}

De un canal se han recibido ya todos los valores enviados. ¿Qué ocurre en el `.receive` **siguiente** si el canal **sigue abierto** (nunca se cerró)?

{:.quiz}
0 | Lanza `X::Channel::ReceiveOnClosed`
1 | Se bloquea, esperando un valor que quizá nunca llegue
0 | Devuelve `Nil`
0 | Devuelve una lista vacía `()`

{% include quiz.html %}

<div class="extended-explanation">

En un canal **abierto**, `.receive` no puede saber si viene otro valor de camino, así que espera, potencialmente para siempre, si el productor se ha parado sin cerrar. La excepción `X::Channel::ReceiveOnClosed` es el caso del canal **cerrado**: solo un canal cerrado y vacío falla enseguida en lugar de bloquearse.

</div>

{% include nav.html %}
