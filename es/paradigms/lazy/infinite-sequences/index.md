---
title: Secuencias infinitas
translations_gpt:
---

{% include menu.html %}

Sustituye el valor final por un `*` y la secuencia se vuelve **infinita**: no tiene último elemento. Como la lista es perezosa, esto es perfectamente seguro: no se calcula nada hasta que lo tomas.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

La serie de potencias de dos sigue para siempre, pero `.head(5)` extrae solo las cinco primeras. El rango `1..*` es la secuencia infinita más sencilla: todos los enteros a partir de uno.

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Incluso puedes definir una secuencia en términos de sus propios elementos anteriores. La sucesión de Fibonacci, en la que cada número es la suma de los dos anteriores, es célebremente una sola línea:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

La clausura `* + *` toma los dos elementos anteriores y los suma. Guardar la secuencia en `@fib` no da problema aquí porque el operador `...` la marca como perezosa, así que el array no intenta calcularla entera: solo se producen los diez elementos que pide `@fib[^10]`.

La regla práctica: una secuencia infinita es segura mientras solo extraigas de ella una porción finita.

{% include nav.html %}
