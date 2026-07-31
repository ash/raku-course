---
title: El orden de los END
---

{% include menu.html %}

## Problema

Un programa puede tener más de un phaser `END`. Cuando es así, se ejecutan en orden **inverso** a como fueron escritos — el último declarado se ejecuta primero (último en entrar, primero en salir).

Escribe dos phasers `END`, el primero imprimiendo `first END` y el segundo imprimiendo `second END`, seguidos de un simple `say 'body'`. Predice y reproduce el orden de la salida.

## Ejemplo

El programa imprime:

```
body
second END
first END
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
