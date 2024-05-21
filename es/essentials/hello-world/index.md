---
title: ¡Hola, Mundo! en Raku
---

{% include menu.html %}

Genial, hemos aprendido las cosas esenciales necesarias para hablar con Raku y ver la respuesta, así que vamos directamente al primer programa real, '¡Hola, Mundo!'.

```raku
say 'Hello, World!';
```

Justo antes de aprender lo básico de las funciones, veamos algunas opciones diferentes que puedes usar en este programa.

Primero que todo, puedes poner paréntesis alrededor del argumento de la función:

```raku
say('Hello, World!');
```

En segundo lugar, puedes usar otras funciones, a saber, `put` y `print`. Nuevamente, con o sin paréntesis:

```raku
put 'Hello, World!';

print("Hello, World!\n");
```

Observa que necesitas agregar manualmente el carácter de nueva línea al final del mensaje en el caso de `print`. Pero no te preocupes, cubriremos todos estos detalles más adelante.

Antes de continuar, déjame mostrarte una opción más emocionante. Puedes llamar a una función como un método directamente en la cadena:

```raku
'Hello, World!'.say;
```

{% include nav.html %}