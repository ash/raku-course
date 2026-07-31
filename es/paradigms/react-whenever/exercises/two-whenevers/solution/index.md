---
title: 'Solución: Dos whenever'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Puedes encontrar el código fuente en el archivo [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Salida

```
200
```

## Comentarios

1. Los dos bloques `whenever` observan los dos supplies con nombre y reaccionan de manera **distinta**: los ingresos se suman, los reintegros se restan. Un bloque react, dos flujos, dos reacciones diferenciadas: esa es la gracia de tener un `whenever` por fuente.

1. El bloque react termina solo cuando ambos supplies están acabados, así que el saldo es definitivo antes de imprimirse: `100 + 50 + 200 - 30 - 120` da `200`. Como la suma y la resta conmutan, el entrelazado de los dos flujos no afecta al resultado.

1. Aquí ambos supplies entregan sus valores al instante, un flujo tras otro. En la vida real los eventos de una cuenta bancaria llegan repartidos a lo largo del tiempo — un ingreso ahora, un reintegro una hora después — y los dos flujos se entrelazan, como en la demostración de [Dos temporizadores](/es/paradigms/react-whenever/two-timers). El código se queda exactamente igual: el bloque react ejecuta el cuerpo del `whenever` que corresponda a cada evento según entra.

{% include nav.html %}
