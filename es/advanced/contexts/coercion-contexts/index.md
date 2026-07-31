---
title: Contexto numérico, de cadena y booleano
---

{% include menu.html %}

Tres contextos muy comunes piden a un valor que se comporte como un número, una cadena o un valor booleano. Cada uno tiene un operador prefijo que lo fuerza explícitamente:

* `+` — contexto numérico
* `~` — contexto de cadena
* `?` — contexto booleano

Aplicados a un array, devuelven su longitud, sus elementos unidos por espacios, y si tiene algún elemento:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Un array vacío es `0` en contexto numérico y `False` en contexto booleano:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

No necesitas escribir siempre estos operadores a mano, porque el lenguaje puede imponer el contexto correcto por ti. La aritmética pone sus operandos en contexto numérico, la concatenación los pone en contexto de cadena, e `if`, `while` y `and`/`or` ponen su condición en contexto booleano:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

Así que `if @array { … }` funciona exactamente como esperarías: un array no vacío es verdadero. Los operadores prefijo son la forma explícita de pedir las mismas coerciones.

En combinación con un `if` postfijo, esto permite crear código realmente expresivo:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
