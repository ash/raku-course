---
title: 'Solution: Silenciar una advertencia'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Puedes encontrar el código fuente en el archivo [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Salida

```
Hello, !
```

## Comentarios

1. Interpolar el `$name` indefinido en la cadena normalmente dispara una advertencia de "uso de valor no inicializado". Envolver la expresión en `quietly` la suprime, así que solo se imprime el saludo.

1. Al igual que `do`, `quietly` devuelve el valor de su bloque, por lo que la cadena ensamblada (con el nombre faltante dejando un espacio vacío) se almacena en `$greeting`.

1. `quietly` solo oculta la advertencia; el valor sigue siendo indefinido. Si en cambio quieres *lidiar* con el valor faltante, proporciona un valor predeterminado con el operador definido-o `//`: `$name // 'friend'` produce `'friend'` cuando `$name` es indefinido, así que `"Hello, " ~ ($name // 'friend') ~ "!"` imprime `Hello, friend!` sin ninguna advertencia.

{% include nav.html %}
