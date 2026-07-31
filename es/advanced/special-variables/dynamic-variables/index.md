---
title: Variables dinámicas
---

{% include menu.html %}

Una variable _dinámica_ tiene el twigil `*`. A diferencia de una variable léxica, que solo es visible en el bloque donde se declara, una variable dinámica se encuentra buscando **hacia afuera a través de la pila de llamadas** — a través de quien llamó al código actual, sin importar dónde esté definido ese código.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

La subrutina `greet` no declara `$*greeting` y no la recibe como argumento, pero puede verla, porque la variable es dinámica y `greet` fue llamada desde un lugar donde está en ámbito.

Este ejemplo funcionaría con una simple variable escalar global `$greeting`, pero la naturaleza de las variables dinámicas se verá en el siguiente ejemplo.

Como la búsqueda sigue la pila de llamadas, una declaración más cercana **anula** a una más lejana durante la duración de su bloque:

```raku
my $*level = 'outer';

sub show {
    say $*level;
}

show(); # outer

{
    my $*level = 'inner';
    show(); # inner
}
```

La misma `show` imprime `outer` la primera vez e `inner` cuando se llama desde dentro del bloque que redeclaró `$*level`. Esto es el _ámbito dinámico_, y así es como funcionan las variables integradas de Raku `$*OUT`, `$*IN` y `$*ERR` — puedes redirigir temporalmente la salida redeclarando `$*OUT` en un bloque, y cada rutina que llames dentro de él ve el nuevo valor. Las variables dinámicas son ideales para contexto que debe fluir hacia el código llamado sin pasarse como argumento explícito.

{% include nav.html %}
