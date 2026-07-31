---
title: '`WHO` y `HOW`'
---

{% include menu.html %}

Dos herramientas de introspección más completan el conjunto: `HOW` y `WHO`.

## `HOW`

Cada valor en Raku está respaldado por un _metaobjeto_, un objeto que sabe cómo funciona el tipo del valor. `HOW` (abreviatura de _Higher Order Workings_) devuelve ese metaobjeto:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Has estado usando el metaobjeto todo el tiempo, quizás sin darte cuenta. El `.^` en `.^name` es una llamada a método que se enruta a través de `HOW`. Estas dos líneas son equivalentes:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

Así que `$x.^name` es simplemente una forma más corta de escribir `$x.HOW.name($x)`. Observa que el objeto se pasa de nuevo como argumento: el metaobjeto es *compartido* por cada valor del tipo, así que a un meta-método se le indica sobre qué objeto se le está preguntando. La forma `.^` hace esto automáticamente. (Para `name`, el argumento se ignora, pero pasarlo es la forma correcta y general; algunos meta-métodos sí lo utilizan.)

Lo mismo aplica a otros meta-métodos que puedas encontrar, como `.^methods`, que lista los métodos a los que un valor responde.

## `WHO`

`WHO` devuelve el _paquete_ al que pertenece un nombre, es decir, la tabla de símbolos definidos en ese espacio de nombres:

```raku
say Int.WHO.^name; # Stash
```

Un `Stash` (un hash de tabla de símbolos) se vuelve útil cuando trabajas con módulos, donde te permite buscar los nombres que un módulo define. Volveremos a esto en [la sección sobre módulos](/es/advanced/module-introspection); por ahora, es suficiente saber que `WHO` existe y qué representa.

{% include nav.html %}
