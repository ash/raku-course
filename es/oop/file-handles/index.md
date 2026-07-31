---
title: Manejadores de archivo
translations_gpt:
---

{% include menu.html %}

Leer o escribir un archivo entero de una vez es cómodo, pero a veces quieres recorrer un archivo línea a línea, o mantener un archivo abierto mientras escribes en él repetidamente. Para eso se usa un _manejador de archivo_.

La forma más sencilla de leer un archivo línea a línea ni siquiera necesita un manejador explícito: el método `lines` sobre un objeto de ruta entrega las líneas de una en una, listas para un bucle `for`:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Cada `$line` es una sola línea, sin su salto de línea final. El programa imprime:

```
ONE
TWO
THREE
```

Para escribir en un archivo a través de un manejador, ábrelo con `open` y la bandera `:w` (write), usa los métodos `say` o `print` del manejador y ciérralo con `close` al terminar:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Cerrar el manejador asegura que todo lo que escribiste se vuelca al disco. Leer línea a línea, como arriba, es la manera habitual de tratar archivos demasiado grandes para cargarlos enteros en memoria.

{% include nav.html %}
