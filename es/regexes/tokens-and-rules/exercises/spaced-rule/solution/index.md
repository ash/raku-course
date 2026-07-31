---
title: 'Solución: Una regla con espacios'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Puedes encontrar el código fuente en el archivo [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Salida

```
True
```

## Comentarios

1. Como `TOP` es una `rule`, cada espacio escrito entre las llamadas `<word>` exige espacio en blanco en la entrada.

1. La cadena `'the quick fox'` tiene espacios entre las tres palabras, así que se analiza. Con un `token` para `TOP`, los espacios del patrón se ignorarían y el análisis fallaría.

{% include nav.html %}
