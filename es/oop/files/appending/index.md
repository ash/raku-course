---
title: Añadir a un archivo
translations_gpt:
---

{% include menu.html %}

Por omisión, `spurt` sustituye lo que hubiera en el archivo. Para añadir al final de un archivo existente, pasa el argumento con nombre `:append`:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

El segundo `spurt` conserva el contenido existente y añade la línea nueva después, así que el archivo acaba con las dos líneas:

```
line1
line2
```

Sin `:append`, la segunda llamada habría sobrescrito el archivo y solo quedaría `line2`. Añadir al final resulta útil para cosas como los archivos de registro, donde cada ejecución de un programa se suma a un historial que crece en lugar de empezar de cero.

{% include nav.html %}
