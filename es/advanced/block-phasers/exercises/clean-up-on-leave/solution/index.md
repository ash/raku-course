---
title: 'Solution: Limpiar al salir'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Encuentra el programa en el archivo [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Salida

```
Working
Cleanup
```

## Comentarios

1. Después de que se imprime `Working`, el `return` sale de la subrutina inmediatamente, por lo que `never reached` nunca se imprime.

1. Aunque se salió del cuerpo antes de tiempo, el phaser `LEAVE` aún se dispara al salir, imprimiendo `Cleanup`. Esta garantía es exactamente la razón por la que `LEAVE` es el lugar adecuado para liberar recursos: se ejecuta sin importar cómo termine el bloque.

{% include nav.html %}
