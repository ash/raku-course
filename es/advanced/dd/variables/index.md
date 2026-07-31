---
title: Volcado de variables
---

{% include menu.html %}

Llama a `dd` para ver lo que contiene una variable, tal como lo harías con `say`:

```raku
my $var = 42;
dd $var;
```

Junto con el valor, `dd` también muestra el nombre de la variable:

```console
$var = 42
```

Si la variable tiene un tipo declarado, el tipo también aparece. Compara la salida del siguiente programa con la anterior:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Esta es la diferencia principal con `say`: una sola llamada a `dd` sobre un escalar te dice el nombre y, cuando se conoce, el tipo de los datos — así puedes colocar varias llamadas a `dd` en un programa y aún reconocer qué salida pertenece a qué variable.

También puedes volcar estructuras de datos más complejas, como arreglos o hashes. Aquí, `dd` imprime una representación similar a código del valor:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Observa que el arreglo anidado permanece claramente visible (aunque no se imprime el nombre de la variable). Lo mismo funciona para hashes, cuyas claves `dd` imprime en orden alfabético:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
