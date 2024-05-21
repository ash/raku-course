---
title: Solución de ‘Enteros Verdaderos y Falsos’
---

{% include menu.html %}

Para convertir un número a un valor Booleano, puedes usar el operador prefijo `?` o una forma de constructor, o llamar al método `Bool`, o la rutina `so` ya sea como un operador prefijo o como un método:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Es bastante obvio que los valores distintos de cero se convierten en `True`. Por lo tanto, estamos más interesados en observar aquellas opciones que se convierten en `False`.

Todos los ceros, ya sean enteros, de punto flotante o racionales, se convierten a `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Por supuesto, nada cambia si intentas negar el número primero:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Puedes encontrar el programa completo con el ejemplo anterior en el archivo [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku).

{% include nav.html %}