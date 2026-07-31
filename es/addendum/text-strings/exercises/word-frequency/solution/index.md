---
title: 'Solución: Frecuencia de palabras'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Puedes encontrar el código fuente en el archivo [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Salida

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Comentarios

1. `$text.words` da las palabras; `%freq{$_}++` incrementa un contador por cada una,
creando la clave la primera vez que la ve.

1. Ordenar por `-.value` pone la más frecuente la primera; añadir `.key` como segundo
criterio de ordenación deshace los empates alfabéticamente, así que el orden es
completamente determinista.

{% include nav.html %}
