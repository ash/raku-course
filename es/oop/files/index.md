---
title: Trabajar con archivos
translations_gpt:
---

{% include menu.html %}

La forma más sencilla de trabajar con un archivo es leerlo o escribirlo entero de una vez.

La rutina `spurt` escribe una cadena en un archivo, creándolo (o sustituyendo su contenido si ya existe):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

La rutina `slurp` lee de vuelta todo el contenido de un archivo en una cadena:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Juntas, `spurt` y `slurp` te permiten guardar datos y volver a cargarlos con dos llamadas cortas. (Aquí se usa `print` en lugar de `say`, porque el texto ya termina con un salto de línea.)

Estas operaciones sobre el archivo entero son ideales cuando un archivo es lo bastante pequeño como para caber cómodamente en memoria. Para archivos más grandes, o cuando quieres procesar un archivo línea a línea, se usa un [manejador de archivo](/es/oop/file-handles), tratado al final de esta sección. El tema siguiente muestra cómo añadir a un archivo en lugar de sustituirlo.

{% include nav.html %}
