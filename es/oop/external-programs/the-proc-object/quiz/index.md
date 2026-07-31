---
title: Quiz — El objeto Proc
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | un error

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` es el entero que devolvió el programa; aquí a la shell se le dijo `exit 2`, así que es `2`. El programa no lanza ninguna excepción: el `Proc` fallido se guarda en `$proc` y se inspecciona con `.exitcode`, y mirar el resultado cuenta como manejarlo. (Solo surgiría una excepción si un `Proc` fallido se descartara sin comprobar.)

</div>

{% include nav.html %}
