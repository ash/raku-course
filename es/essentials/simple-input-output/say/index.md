---
title: Salida con say
---

{% include menu.html %}

La función `say` (o una subrutina, o simplemente rutina) imprime los valores en el flujo de salida estándar, `STDOUT`. Si estás ejecutando el programa desde una terminal, la salida aparecerá allí. Si estás utilizando servicios en línea, la salida se envía a un área dedicada de la página web.

Aquí hay un ejemplo de uso de `say`:

```raku
say 42;
```

Esta línea puede ser parte de un programa más grande o ser el programa completo en sí. Obviamente, imprime `42` en la salida.

Trabajemos ahora con cadenas:

```raku
say 'Hello, World!';
```

Voilà, obtuvimos `Hello, World!` en la pantalla.

La rutina `say` puede aceptar más de un argumento, por lo que podemos imprimir más valores de una vez:

```raku
say 42, 'Hello, World!';
```

Solo nota que las partes de esta salida se concatenan en una sola cadena: `42Hello, World!`, por lo que es mejor agregar un espacio entre ellas. Y deberías poder resolver este problema ahora, por ejemplo, así:

```raku
say 42, ' ', 'Hello, World!';
```

Después de imprimir todos los argumentos, la rutina `say` agrega un carácter de nueva línea a la salida.

{% include nav.html %}