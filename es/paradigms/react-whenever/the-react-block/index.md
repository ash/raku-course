---
title: El bloque react
translations_gpt:
---

{% include menu.html %}

Un bloque `react` es un lugar donde viven las reacciones. Dentro de él, un `whenever` dice «siempre que este supply emita un valor, ejecuta este cuerpo». El bloque `react` espera entonces hasta que todos los supplies que observa han terminado:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

El cuerpo del `whenever` se ejecuta una vez por cada valor — `1`, `2`, `3` —, sumándolo a `$sum`. El valor de tema está disponible como `$_` (también puedes nombrarlo con `-> $v`).

El comportamiento clave es que `react` **se bloquea** hasta que sus supplies han terminado. Solo después de que el `Supply.from-list` haya emitido todos sus valores acaba el bloque `react` y el programa pasa al `say`. Por eso `$sum` ya vale `6` cuando se imprime: el bloque react esperó al flujo entero.

Esto hace de `react` un lugar natural para reunir resultados de un flujo: prepara las reacciones, déjalo correr hasta el final y usa después lo que hayas recogido.

{% include nav.html %}
