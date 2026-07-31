---
title: Depuración con `dd`
---

{% include menu.html %}

Hay diferentes formas de depurar un programa, desde una simple instrucción de impresión como `say` hasta herramientas de rastreo más elaboradas. En esta sección, veremos la práctica rutina `dd`. Está integrada en el compilador Rakudo, aunque no es parte del estándar del lenguaje Raku en sí.

El nombre `dd` significa _data dumper_ (volcador de datos). A diferencia de `say` o `put`, que están destinados a la salida normal del programa, `dd` imprime una representación orientada al desarrollador de un valor — la misma forma similar a código producida por el método [`.raku`](/es/advanced/representations/raku-method) de la sección anterior. Escribe en el flujo de error estándar, de modo que su salida no se mezcla con los datos que tu programa imprime para el usuario.

{% include nav.html %}
