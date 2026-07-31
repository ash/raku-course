---
title: 'Solución: Codificación por longitud de series'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Puedes encontrar el código fuente en el archivo [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Salida

```
a3b4c2
```

## Comentarios

1. El patrón `(.) $0*` captura un carácter y después empareja tantas copias más de él
como sigan: una serie entera por coincidencia. `m:g` recoge todas las series.

1. Para cada serie, `$match[0]` es la letra repetida y `$match.chars` es su longitud,
así que las dos juntas dan entradas como `a3`.

1. Nombrar la coincidencia con `-> $match` es opcional. Sin ello, cada coincidencia pasa
a ser el tema `$_`, y puedes prescindir de la variable y llamar a los métodos sobre él
directamente:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
