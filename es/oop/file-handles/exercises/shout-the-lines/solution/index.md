---
title: 'Solución: Numere las líneas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Puedes encontrar el código fuente en el archivo [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Salida

```
1: apple
2: banana
3: cherry
```

## Comentarios

1. `spurt` escribe las tres palabras en el archivo, separadas por saltos de línea.

1. `.IO.lines` entrega las líneas una a una, sin sus saltos de línea finales. Llevamos un contador `$n` que incrementamos en cada pasada, así que cada línea se imprime junto con su posición en el archivo.

{% include nav.html %}
