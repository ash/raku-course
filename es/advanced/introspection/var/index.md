---
title: Usando `VAR`
---

{% include menu.html %}

`VAR` es un pseudo-método que devuelve el objeto contenedor subyacente. Para una variable escalar, la llamada `.VAR` devuelve el contenedor `Scalar` que hay detrás de ella.

## `^name`

Una vez que tienes el contenedor, puedes preguntar por el nombre de su clase con `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` sobre la variable devuelve el tipo del _valor_ (`Int` o `Str`), mientras que `.VAR.^name` devuelve el tipo del _contenedor_, que es `Scalar` en ambos casos.

## `default`

El método `default` devuelve el valor por defecto del contenedor, es decir, lo que obtienes cuando el contenedor no tiene nada propio. Con el trait `is default` lo estableces explícitamente:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Sin un valor por defecto explícito, el valor por defecto es el tipo del contenedor. Para un contenedor sin tipo, ese es `Any`, independientemente del valor que contenga actualmente:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Para un contenedor con tipo, es el tipo de la restricción:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

El método `name` devuelve el nombre del contenedor, incluyendo el sigil:

```raku
my $language;
say $language.VAR.name; # $language
```

Ten cuidado de no confundir `^name` (el tipo) con `name` (el nombre propio de la variable).

{% include nav.html %}
