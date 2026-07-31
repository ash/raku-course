---
title: Phasers
---

{% include menu.html %}

Un _phaser_ es un bloque especial que se ejecuta automáticamente en un momento particular de la vida de un programa, en lugar de donde aparece en el código fuente. No llamas a un phaser; solo indicas _cuándo_ debe ejecutarse su código, nombrando el bloque.

Los phasers más comunes marcan etapas del programa en su conjunto:

* `BEGIN` se ejecuta lo antes posible, mientras el programa aún se está compilando;
* `INIT` se ejecuta una vez al inicio de la ejecución, antes del código principal;
* `END` se ejecuta una vez al final, después de que el código principal ha terminado.

El siguiente programa coloca estos phasers entre instrucciones ordinarias. Observa que la salida no sigue el orden de las líneas en el archivo:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

El programa imprime:

```
BEGIN
INIT
main body
END
```

`BEGIN` se ejecuta primero, durante la compilación. Luego, en tiempo de ejecución, `INIT` se ejecuta antes del cuerpo principal. El cuerpo principal se imprime a continuación, y `END` se ejecuta al final, sin importar dónde fue escrito.

Un uso común de `END` es imprimir un resumen o limpiar algo justo antes de que el programa termine, mientras que `BEGIN` es útil para trabajo que debe ocurrir antes que cualquier otra cosa.

{% include nav.html %}
