---
title: Convertir tipos usando métodos de coerción de tipos
---

{% include menu.html %}

Para convertir, o _coaccionar_ un tipo, llama a un método con el nombre del tipo de dato. Por ejemplo, convierte una cadena en un número entero:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

En muchos casos, no necesitas convertir valores explícitamente, ya que Raku hace ese trabajo por ti. El siguiente código funciona correctamente y de manera predecible:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "The result is $c."; # The result is 30.
```

Las dos variables, `$a` y `$b`, contienen cadenas, pero se usan en una expresión aritmética con `+`. En este punto, ambas cadenas se convierten en enteros, y así `$c` también obtiene un entero. Una variable que contiene un entero se interpola en una cadena en la última línea, donde Raku realiza las operaciones necesarias para presentar el número como una secuencia de caracteres dígitos.

{% include nav.html %}