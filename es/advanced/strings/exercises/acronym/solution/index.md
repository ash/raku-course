---
title: 'Solution: Acrónimo'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Encuentra el programa en el archivo [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Salida

```
HTML
```

## Comentarios

1. `$phrase.words` devuelve la lista de palabras. El bucle toma el primer carácter de cada una con `substr(0, 1)` y lo añade a `$acronym`.

1. Una vez recopiladas todas las iniciales, `uc` convierte el resultado en mayúsculas: `HTML`.

{% include nav.html %}
