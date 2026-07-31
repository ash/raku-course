---
title: Heredocs
---

{% include menu.html %}

Un _heredoc_ es una forma de entrecomillado para texto multilínea. En lugar de delimitadores alrededor del texto, se indica una palabra terminadora con `:to`, y la cadena se extiende desde la siguiente línea hasta una línea que contenga solo esa palabra:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Esto imprime:

```
Hello,
World!
```

El terminador (`END` aquí — cualquier palabra sirve) marca dónde termina el texto. Observa el uso de `print`: el texto conserva el salto de línea que precede al terminador, por lo que ya termina con un salto de línea — usar `say` añadiría un segundo y dejaría una línea en blanco al final. Como el heredoc comienza con `q:to`, el texto no se interpola; usa `qq:to` para interpolar variables:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Un detalle útil: la **indentación del terminador de cierre** se elimina de cada línea del texto. Esto te permite indentar un heredoc para que coincida con el código circundante sin que esa indentación termine en la cadena:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Esto imprime lo mismo que el primer ejemplo: `Hello,` y `World!`. Aquí el `END` de cierre está indentado ocho espacios, así que se eliminan ocho espacios de cada línea, y la cadena resultante es simplemente `Hello,\nWorld!` sin espacios iniciales.

El terminador de cierre establece cuánto se elimina, por lo que cada línea del texto debe estar indentada al menos esa cantidad. Si una línea tiene menos espacios iniciales, Raku no puede eliminar la cantidad completa y muestra una advertencia — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Mantén el terminador a una profundidad igual o menor que la línea menos indentada para evitarlo. Los heredocs son la opción natural para plantillas, mensajes y cualquier bloque de texto que abarque varias líneas.

{% include nav.html %}
