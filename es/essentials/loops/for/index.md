---
title: '"for" loop'
---

{% include menu.html %}

El bucle `for` es una herramienta poderosa para iterar sobre múltiples elementos. Por ejemplo, tomemos un rango:

```raku
for 1..5 -> $n {
    say $n;
}
```

En este programa, la variable `$n` toma el siguiente valor del rango en cada iteración. Nota que no tienes que declarar la variable con `my` explícitamente. El bloque de código se repite tantas veces como el número de elementos en la fuente de datos. Así, el programa imprime los números línea por línea:

```console
$ raku t.raku 
1
2
3
4
5
```

El programa itera sobre todos los valores que el [rango](/es/essentials/ranges) `1..5` genera. Estos son `1`, `2`, `3`, `4` y `5`.

## Tomando más de un valor

Una característica interesante de Raku es que puedes tomar más de un elemento en una sola iteración. El siguiente programa imprime dos números en un bucle:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

La salida de este programa es la siguiente:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}