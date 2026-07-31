---
title: Phasers de bloque
---

{% include menu.html %}

Además de los phasers a nivel de programa, Raku tiene phasers vinculados al ciclo de vida de un solo bloque o bucle.

## Entrada y salida de un bloque

El phaser `ENTER` se ejecuta cada vez que la ejecución entra en un bloque, y el phaser `LEAVE` se ejecuta cada vez que sale de él, sin importar en qué línea estén escritos:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

La salida muestra que `ENTER` se ejecuta primero y `LEAVE` se ejecuta al final, alrededor del cuerpo del bloque:

```
before block
entering
inside
leaving
after block
```

`LEAVE` es especialmente útil porque se ejecuta incluso si se sale del bloque antes de tiempo, lo que lo convierte en un lugar confiable para liberar un recurso.

Un phaser puede tomar un bloque completo `{ }` en lugar de una sola sentencia, y puedes configurar varios de ellos. Cuando un bloque tiene más de un `LEAVE`, se disparan en orden inverso: el último registrado se ejecuta primero, de modo que el bloque se deshace como una pila:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

El recurso `A` se abre primero y se cierra al final:

```
open A
open B
work
close B
close A
done
```

Este orden de último en entrar, primero en salir es exactamente lo que necesitas para la limpieza: lo que se configuró más recientemente se desmonta primero. El phaser `END` a nivel de programa se comporta de la misma manera: varios bloques `END` también se ejecutan en orden inverso al que fueron escritos.

## Phasers de bucle

Dentro de los bucles, tres phasers más marcan las etapas de la iteración: `FIRST` se ejecuta una vez antes de la primera iteración, `LAST` se ejecuta una vez después de la última, y `NEXT` se ejecuta al final de cada iteración:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

El bucle produce:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Al igual que con los otros phasers, la posición de `FIRST`, `NEXT` y `LAST` en el código fuente no importa: cada uno se ejecuta en su propio momento.

{% include nav.html %}
