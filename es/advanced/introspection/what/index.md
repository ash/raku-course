---
title: Usando `WHAT`
---

{% include menu.html %}

`WHAT` es un pseudo-método que da acceso al tipo de un valor. Puedes usarlo de manera similar a `.^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

Ambos imprimen el tipo con una pequeña diferencia en la presentación: `.^name` da el nombre sin adornos, mientras que `WHAT` muestra el objeto de tipo, escrito entre paréntesis:

```
Int
(Int)
```

Para una variable sin restricción de tipo, el tipo comienza como `Any`. Tan pronto como asignas un valor, tanto `^name` como `WHAT` siguen el tipo del valor almacenado:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Con una restricción de tipo, el tipo se conoce inmediatamente, incluso antes de que se asigne algo:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Comparando objetos de tipo

Dado que `WHAT` devuelve el objeto de tipo en sí, puedes comparar dos de ellos con el operador de _identidad de valor_ `===`, que pregunta si ambos lados son exactamente el mismo valor. Solo existe un objeto de tipo por cada tipo, así que esta es una forma limpia de comprobar si dos valores comparten un tipo:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — both are Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

A diferencia de `==`, que compara números, `===` compara identidad, por lo que funciona directamente con objetos de tipo (y otros valores).

{% include nav.html %}
