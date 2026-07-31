---
title: 'Solución: Un libro'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Puedes encontrar el código fuente en el archivo [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Salida

```
Raku by Larry
```

## Comentarios

1. Cada una de las declaraciones `has $.title` y `has $.author` declara un atributo junto con un accesor de lectura.

1. Ambos accesores se usan dentro de una misma cadena entre comillas dobles. Cada uno va envuelto en llaves — `{$b.title}` y `{$b.author}` —, que es la forma de interpolar código: lo que hay entre las llaves se ejecuta y su resultado se inserta, de modo que los accesores se llaman y sus valores se colocan en la cadena.

1. Ambos atributos son cadenas, así que conviene declararlos como tales.

{% include nav.html %}
