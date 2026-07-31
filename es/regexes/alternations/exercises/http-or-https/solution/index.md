---
title: 'Solución: http o https'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Puedes encontrar el código fuente en el archivo [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Salida

```
｢https｣
```

## Comentarios

1. Tanto `http` como `https` podrían coincidir al principio, pero `|` usa el emparejamiento del token más largo.

1. Así que gana el más largo, `https`, aunque `http` esté escrito primero.

## Una solución alternativa

Las dos palabras solo se diferencian por una `s` final, así que en lugar de una alternativa puedes hacer opcional esa `s` con el cuantificador `?`:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

El `?` se liga solo al átomo inmediatamente anterior — la `s` —, no a toda la palabra, así que `https?` se lee como `http` seguido de una `s` opcional. Ese único patrón empareja tanto `http` como `https`, y al ser voraz toma la `s` siempre que esté.

{% include nav.html %}
