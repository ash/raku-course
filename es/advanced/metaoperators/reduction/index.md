---
title: Metaoperadores de reducción
translations_gpt:
---

{% include menu.html %}

Un meta-operador de reducción se escribe como un operador regular envuelto en corchetes, como `[+]` o `[*]`. Toma una lista de valores e inserta el operador entre cada par de ellos, reduciendo toda la lista a un único valor.

Por ejemplo, `[+]` suma todos los elementos de una lista:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

La construcción `[+] @data` es equivalente a escribir el operador a mano:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Cualquier operador infijo adecuado funciona de la misma manera. Con `[*]` obtienes el producto de la lista, por lo que aplicarlo al rango `1..$n` es una forma práctica de calcular un factorial:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Aquí, el rango `1..$n` produce los números del 1 al 5, y `[*]` los multiplica: `1 * 2 * 3 * 4 * 5`, que es _5!_.

La concatenación de cadenas también funciona. La reducción `[~]` une una lista de cadenas en una sola:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Incluso los operadores de comparación se pueden reducir. `[<]` indica si los valores están en orden estrictamente creciente:

```raku
say [<] 1, 2, 3; # True
```

## Reducción triangular

Si colocas una barra invertida dentro de los corchetes, obtienes una reducción _triangular_, que conserva todos los resultados intermedios en lugar de solo el final:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Cada elemento del resultado es una suma parcial: `1`, luego `1+2`, luego `1+2+3`, y así sucesivamente hasta la suma de toda la lista.

{% include nav.html %}
