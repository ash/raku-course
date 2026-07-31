---
title: whenever
translations_gpt:
---

{% include menu.html %}

Un solo bloque `react` puede contener **varios** bloques `whenever`, cada uno observando un supply distinto. El bloque reacciona al supply que emita a continuación, ejecutando el cuerpo correspondiente:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Ambos supplies se observan a la vez. Sus valores — `1, 2, 3` y `10, 20` — fluyen todos hacia `$sum`, que acaba en `36`. El bloque `react` termina solo cuando **ambos** supplies están acabados.

Cada `whenever` reacciona de forma independiente, y así es como se combinan flujos: un `whenever` por fuente, todos dentro del mismo `react`. Un programa real podría observar una conexión de red en un `whenever` y un temporizador en otro, respondiendo a cada uno según llegan sus eventos.

Dentro del cuerpo de un `whenever` tienes el valor emitido (como `$_` o como parámetro con nombre) y puedes hacer cualquier cosa con él: actualizar estado, emitir a otro supply o incluso cerrar antes de tiempo el bloque react con `done`.

{% include nav.html %}
