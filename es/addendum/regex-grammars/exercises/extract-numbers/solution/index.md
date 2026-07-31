---
title: 'Solución: Extraiga y sume números'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Puedes encontrar el código fuente en el archivo [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Salida

```
numbers: 12 3 25
sum: 40
```

## Comentarios

1. Pasarle la expresión regular `/\d+/` a `.comb` devuelve como cadena aparte cada
serie de dígitos, ignorando las palabras intermedias.

1. `[+] @numbers` los suma, convirtiendo por el camino en números las cadenas de dígitos.

{% include nav.html %}
