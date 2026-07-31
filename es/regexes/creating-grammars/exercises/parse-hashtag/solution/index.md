---
title: 'Solución: Analice una etiqueta'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Puedes encontrar el código fuente en el archivo [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Salida

```
｢raku｣
```

## Comentarios

1. `TOP` detalla el `#` fijo seguido del token `<tag>`.

1. `.parse` exige que coincida la cadena entera, y la etiqueta queda después disponible como la captura `<tag>`.

## Una alternativa

También puedes dejar que `tag` empareje la etiqueta completa — el `#` junto con la palabra — y llegar a la palabra a través de una regla `word` anidada:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Esto imprime el mismo `｢raku｣`. Ahora `<tag>` captura todo `#raku`, mientras que a la palabra de dentro se llega como `<tag><word>`. La gramática se lee un poco más como la cosa que describe: una etiqueta *es* un `#` seguido de una palabra, y la palabra es una pieza con nombre por derecho propio.

{% include nav.html %}
