---
title: 'El phaser `CATCH`'
translations_gpt:
---

{% include menu.html %}

El bloque `try` es cómodo, pero trata el bloque entero como una sola unidad: o funciona o no. El phaser `CATCH` te da un control más fino: te permite manejar una excepción _dentro_ del bloque donde ocurrió y decidir qué hacer.

`CATCH` es un phaser, como los que conociste en la [sección sobre el flujo de control](/es/advanced/phasers). Lo escribes en cualquier punto dentro de un bloque; solo se ejecuta si allí se lanza una excepción. La excepción está disponible como el tema `$_`:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

El programa imprime:

```
Caught: Boom!
after
```

El bloque `default` dentro de `CATCH` maneja cualquier excepción. Una vez que se ha ejecutado, la excepción se considera manejada, así que el programa no se detiene: la ejecución sigue después del bloque que lo contiene, y por eso se imprime `after`.

Sin el `CATCH`, el `die` habría terminado el programa antes de que se pudiera alcanzar `after`.

{% include nav.html %}
