---
title: Escribir un trait
translations_gpt:
---

{% include menu.html %}

Los traits son subrutinas multi ordinarias con un nombre especial, por lo que puedes escribir los tuyos. Para agregar un trait que se escriba `is something`, define un `multi sub trait_mod:<is>` cuyos parámetros indiquen a qué se aplica y nombren el trait:

Este es uno de los rincones más avanzados de Raku, así que no te preocupes si parece intrincado. Puedes usar los traits incorporados perfectamente bien sin saber cómo están hechos, y rara vez necesitarás escribir uno tú mismo — trata esta página como una mirada bajo el capó.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Lee la firma: el primer parámetro, `Routine:D $r`, es el elemento al que el trait está asociado — aquí una subrutina. El `:D` es un _smiley_ de tipo que exige un valor **definido** — un objeto rutina real, no el tipo `Routine` vacío e indefinido en sí mismo. (Sus compañeros son `:U`, que requiere el objeto de tipo indefinido, y `:_`, que acepta cualquiera de los dos.) El parámetro nombrado `:$traced!` es el nombre propio del trait; su presencia es lo que hace que `is traced` llame a esta sub. Como los traits se ejecutan en **tiempo de compilación**, tanto `foo` como `bar` se registran al ser declarados, así que `@traced` ya los lista para cuando el programa se ejecuta — incluso podrías mover la línea `say @traced` arriba de las dos definiciones `sub` y aún así imprimiría `[foo bar]`.

Este pequeño trait solo registra nombres, pero el mismo mecanismo puede hacer mucho más: envolver una rutina para agregar registro de eventos, validar un atributo, o adjuntar metadatos. Escribir el primer parámetro como un `Attribute` o `Variable` en lugar de un `Routine` permite que un trait se aplique a atributos o variables. Los traits son la forma en que Raku mantiene abierta su sintaxis de declaración — `is rw` y tu propio `is traced` están construidos de la misma manera.

{% include nav.html %}
