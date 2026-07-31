---
title: El número de argumentos de línea de comandos
translations_gpt:
---

{% include menu.html %}

## Tarea

Escribe un programa que informe en una frase completa cuántos argumentos ha recibido de la línea de comandos. Haz que la gramática sea correcta: usa la palabra `argument` cuando se haya pasado exactamente uno y `arguments` en todos los demás casos.

## Ejemplo

Así es como se supone que debe reaccionar el programa:

```console
$ raku number-of-command-line-arguments.raku make them count us now
You passed 5 arguments.

$ raku number-of-command-line-arguments.raku solo
You passed 1 argument.
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
