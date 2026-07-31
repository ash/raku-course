---
title: Flujos estándar
translations_gpt:
---

{% include menu.html %}

Todo programa tiene tres _flujos estándar_ que lo conectan con su entorno: la salida estándar, el error estándar y la entrada estándar. Raku los pone a tu disposición mediante tres variables especiales: `$*OUT`, `$*ERR` y `$*IN`.

Llevas escribiendo en la salida estándar desde el principio: `say` y `print` mandan su texto a `$*OUT`.

```raku
say 'Hello'; # goes to standard output
```

Los mensajes de diagnóstico y de error se mantienen aparte, en el error estándar, para que no se mezclen con la salida real del programa. La rutina `note` escribe ahí:

```raku
note 'Something looks wrong'; # goes to standard error
```

Esta separación resulta útil porque los dos flujos se pueden redirigir por separado: puedes, por ejemplo, guardar la salida de un programa en un archivo y seguir viendo sus mensajes de error en la pantalla.

También puedes escribir directamente en los flujos. Tanto `$*OUT` como `$*ERR` son _manejadores_ con sus propios métodos `say` y `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

El tercer flujo, `$*IN`, es la entrada estándar. Lo conociste indirectamente a través de `prompt`, que lee una línea de él. Volveremos a la lectura de entrada cuando veamos los [manejadores de archivo](/es/oop/file-handles), porque `$*IN` es un manejador igual que un archivo abierto.

{% include nav.html %}
