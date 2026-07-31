---
title: Dos temporizadores
translations_gpt:
---

{% include menu.html %}

Todos los ejemplos de react vistos hasta ahora usaban `Supply.from-list`, que empuja todos sus valores en el instante en que se lo engancha. Por eso cada flujo se imprimía entero antes de que empezara el siguiente: no había espera de por medio. Los flujos de eventos reales no son así: sus valores llegan repartidos a lo largo del **tiempo**, y un bloque `react` los entrelaza según vienen.

Un temporizador es el flujo más sencillo que se comporta de este modo. `Supply.interval($period)` emite un contador creciente — `0, 1, 2, …` — una vez cada `$period` segundos. Haz correr dos de ellos a ritmos distintos dentro de un mismo `react` y sus valores se entretejen:

```raku
react {
    whenever Supply.interval(0.3) {
        say "tick $_";
    }
    whenever Supply.interval(0.5, 0.25) {
        say "TOCK $_";
    }
    whenever Promise.in(1.4) {
        done;
    }
}
```

Una ejecución típica imprime:

```
tick 0
TOCK 0
tick 1
tick 2
TOCK 1
tick 3
tick 4
TOCK 2
```

El `tick` rápido se dispara cada `0.3` segundos; el `TOCK`, más lento, cada `0.5`, empezando un cuarto de segundo más tarde (el segundo argumento de `interval` es ese retardo inicial). Ninguno espera al otro: el bloque `react` sencillamente ejecuta el cuerpo del `whenever` que corresponde al valor que ha llegado, de modo que los dos flujos se **cruzan** en lugar de turnarse.

Como los temporizadores nunca terminan por sí solos, un tercer `whenever` proporciona la salida: `Promise.in(1.4)` se cumple a los 1,4 segundos, y su cuerpo llama a `done` para acabar el bloque `react`. Sin él, el react haría tic y toc para siempre.

El entrelazado exacto depende de los tiempos, así que una ejecución posterior puede ordenar las líneas un poco de otro modo, pero esa es la naturaleza de reaccionar a eventos en vivo: respondes a cada uno según ocurre, cuando quiera que ocurra.

{% include nav.html %}
