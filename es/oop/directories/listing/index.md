---
title: Listar un directorio
translations_gpt:
---

{% include menu.html %}

La rutina `dir` devuelve las entradas de un directorio, cada una como objeto de ruta. Su orden no está fijado, así que es habitual ordenar el resultado para obtener una salida predecible.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Esto imprime los nombres de los archivos del directorio `box`, en orden:

```
a.txt
b.txt
```

Cada entrada es un objeto de ruta completo; el método `basename` da solo el nombre final, sin la parte del directorio. A un objeto de ruta puedes hacerle las mismas preguntas de antes — `.f`, `.d`, `.e` —, así que puedes, por ejemplo, recorrer un directorio y quedarte solo con los archivos.

{% include nav.html %}
