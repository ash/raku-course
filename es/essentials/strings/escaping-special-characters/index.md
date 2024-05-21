---
title: Escaping special characters in Raku strings
---

{% include menu.html %}

Imagina que quieres imprimir una etiqueta de precio, y mantienes tanto el nombre del producto como su precio en variables escalares.

```raku
my $product = 'Electricity';
my $price = 3.14;
```

¿Cómo imprimes la etiqueta si el precio está en dólares? El resultado esperado es: `Electricity costs $3.14`. Un signo de dólar en cadenas entre comillas dobles es un indicador de una variable a interpolar. Para imprimir el carácter `$` en sí, necesitas escaparlo:

```raku
say "$product costs \$$price";
```

Por supuesto, puedes usar concatenación de cadenas y evitar escapar `$`:

```raku
say $product ~ ' costs $' ~ $price;
```

Esta variante imprime exactamente la misma cadena, pero la interpolación parece más natural y fácil de leer. Nota que el carácter `$` no fue ni interpolado ni escapado en una cadena entre comillas simples: `' costs $'`. Esa es la principal diferencia. Los caracteres especiales en comillas simples aparecen tal cual.

Aquí hay algunos caracteres más que tienen un significado especial en cadenas entre comillas dobles:

`\$` | Signo de dólar
`\n` | Nueva línea
`\r` | Retorno de carro
`\t` | Tabulación horizontal
`\"` | Comilla doble
`\\` | Barra invertida

La forma en que citas la cadena define cómo Raku trata los caracteres especiales. Considera estos dos ejemplos:

```raku
say 'One\nTwo';
say "Three\nFour";
```

Si ejecutas este programa, verás que la primera cadena aparece tal cual en una sola línea. La segunda cadena se dividió en dos partes:

    One\nTwo
    Three
    Four

En comillas dobles, una secuencia especial `\n` se procesó como un carácter de nueva línea, mientras que en una cadena entre comillas simples era una secuencia regular de dos caracteres: `\` y `n`.

Hay una excepción interesante para `'` y `\`. En comillas simples, puedes escapar una comilla simple anteponiéndola con otra `\`:

```raku
say '\''; # '
```

Una barra invertida también tiene que ser escapada si una comilla simple la sigue:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}