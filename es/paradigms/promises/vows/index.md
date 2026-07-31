---
title: Vows 🆕
translations_gpt:
---

{% include menu.html %}

Cuando llamas tú mismo a `$p.keep(...)`, cualquiera que tenga `$p` podría resolverla.
A veces quieres lo contrario: que el código que *produce* el resultado sea lo único con
permiso para resolver la promesa, mientras que todos los demás solo puedan esperarla.
Esa separación es un **voto**.

`Promise.new` te da una promesa; llamar a `.vow` sobre ella devuelve un `Vow`, el derecho
exclusivo a cumplir o romper esa promesa. A partir de ahí la promesa está pensada para ser
de solo lectura: se resuelve a través del voto. La forma habitual es un productor que
mantiene el voto en privado y devuelve solo la promesa:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # take the settle-right
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # settle it through the vow
    }
    return $p;                            # callers get only the read side
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Tomar el voto hace la promesa genuinamente de solo lectura: desde ese momento `$p.keep` y
`$p.break` se rechazan, porque el voto posee ahora el derecho exclusivo a resolverla.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # dies: Access denied to keep/break this Promise; already vowed
```

Así, quien la recibe puede hacer `await` sobre la promesa, encadenarle un `.then` o
comprobar su `.status`, pero no puede resolverla: solo puede hacerlo quien tiene el voto.
Así es como las bibliotecas convierten las API basadas en retrollamadas y eventos en
promesas corrientes: crean una promesa, se quedan con su voto y la cumplen desde dentro
de la retrollamada cuando el evento llega por fin.

Esto es también exactamente lo que hace `start` por ti entre bastidores: crea una
promesa, se guarda el voto y resuelve la promesa con el valor del bloque (o la rompe si
el bloque muere). Crear a mano la promesa y su voto simplemente te permite hacer lo mismo
cuando el resultado no viene de un único bloque de código.

{% include nav.html %}
