---
title: Tipo de retorno de funciones
---

{% include menu.html %}

El resultado de la función también puede ser explícitamente tipado. Hay algunas maneras de expresar eso en el código.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Elige la que más te guste. Observa que en el cuarto ejemplo, el tipo de retorno se escribe dentro de los paréntesis con los parámetros de la función.

{% include nav.html %}