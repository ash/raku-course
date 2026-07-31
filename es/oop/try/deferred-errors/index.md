---
title: No todo error es inmediato
translations_gpt:
---

{% include menu.html %}

Por omisión, una excepción lanzada detiene el programa al instante, y `try` es la manera de capturarla. Pero no todo lo que parece un error fatal detiene realmente tu programa en el momento en que ocurre. Raku tiene fallos que se quedan callados: aplazan su reacción hasta que usas el resultado, o te dejan inspeccionarlos y seguir adelante. Un par de ellos ya han aparecido en esta parte, y vale la pena reunirlos en un solo sitio.

**Una división por cero.** Dividir por cero no estalla donde está escrito. El valor malo se produce y se guarda en silencio; solo lanza la excepción cuando lo *usas*, por ejemplo al imprimirlo o convertirlo:

```raku
my $x = 1 / 0;    # no error here
say 'still running';
say $x;           # only now does it throw
```

Ese comportamiento aplazado, y los objetos `Failure` que hay detrás, son el tema de [Fallos blandos](/es/oop/failures).

**Un programa externo que falla.** Un `Proc` devuelto por `run` o `shell` que terminó sin éxito no lanza ninguna excepción al producirse. Solo la lanza si lo *descartas* sin manejarlo; guárdalo y lee su `.exitcode` (o evalúalo como booleano) y el fallo seguirá siendo un valor simple al que puedes reaccionar. Lo viste en [El objeto Proc](/es/oop/external-programs/the-proc-object).

El hilo común: un fallo puede *aplazarse*, convertirse en un valor que examinas cuando estás listo, en lugar de en una caída inmediata. `try` y el phaser `CATCH` se ocupan de los errores que se lanzan de inmediato; estos mecanismos se ocupan de los que no.

{% include nav.html %}
