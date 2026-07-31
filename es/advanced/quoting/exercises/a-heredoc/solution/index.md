---
title: 'Solution: Un heredoc'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Encuentra el programa en el archivo [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Salida

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Comentarios

1. El heredoc comienza con `qq:to` en lugar de `q:to`, por lo que interpola. Al igual que una cadena `qq`, rellena los escalares — `$name`, `$count`, `$item` — *y* ejecuta código incrustado: el bloque `{$count * $price}` calcula `3 * 25`, de modo que el total `75` aparece en línea.

1. Las comillas dobles alrededor de `"$item"` son simplemente caracteres literales aquí; dentro de un heredoc no hay delimitador que escapar, por lo que se imprimen tal cual mientras `$item` sigue interpolándose.

1. El cuerpo y el `END` de cierre están indentados con los mismos cuatro espacios. La indentación del terminador se elimina de cada línea, así que esos cuatro espacios nunca llegan a la cadena — la salida comienza en el margen izquierdo.

1. El heredoc ya termina con un salto de línea, por lo que se usa `print` en lugar de `say` para evitar añadir una segunda línea en blanco.

{% include nav.html %}
