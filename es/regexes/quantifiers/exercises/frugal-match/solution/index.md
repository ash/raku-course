---
title: 'Solución: Una coincidencia frugal'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Puedes encontrar el código fuente en el archivo [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Salida

```
｢"hi"｣
```

## Comentarios

1. El `?` tras `.+` hace frugal al cuantificador, así que empareja tan pocos caracteres como sea posible.

1. Por eso se detiene en la primera `"` de cierre, capturando solo `"hi"`. Un `.+` voraz habría llegado hasta la última `"` y habría emparejado `"hi" and "bye"`.

{% include nav.html %}
