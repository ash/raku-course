---
title: 'Quiz — `try`'
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside y después outside
0 | Boom!
0 | un error

{% include quiz.html %}

<div class="extended-explanation">

Aquí pasan dos cosas. Primero, `die` aborta de inmediato el resto del bloque `try`, así que la línea `say 'inside'` nunca se alcanza: desde dentro del bloque no se imprime nada. Segundo, como `try` captura la excepción, el programa en sí no se detiene: la ejecución continúa más allá del bloque y `say 'outside'` se ejecuta con normalidad. Así que la única línea impresa es `outside`. (`$r` quedaría sin definir, y el mensaje `Boom!` estaría esperando en `$!` si lo miraras.)

</div>

{% include nav.html %}
