---
title: 'Solución: Agrupe los anagramas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @words = <listen silent enlist cat act dog>;
my %groups;

for @words -> $word {
    %groups{ $word.comb.sort.join }.push($word);
}

for %groups.sort(*.key) -> $pair {
    say $pair.value.sort.join(' ');
}
```

🦋 Puedes encontrar el código fuente en el archivo [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Salida

```
act cat
dog
enlist listen silent
```

## Comentarios

1. Ordenar las letras de una palabra da una *clave canónica*: todos los anagramas
comparten las mismas letras ordenadas, así que añadir a `%groups{ ... }` los reúne bajo
una sola clave. Tras el primer bucle, `say %groups` muestra la estructura entera: cada
clave canónica asociada a su lista de palabras:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Cada valor del hash es la lista de palabras de ese grupo, impresa alfabéticamente con
`.sort.join`.

{% include nav.html %}
