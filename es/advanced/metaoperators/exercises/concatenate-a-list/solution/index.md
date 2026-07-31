---
title: 'Solution: Construir una URL'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Puedes encontrar el código fuente en el archivo [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Salida

```
http://example.com
18
```

## Comentarios

1. El array esta escrito con la forma de comillas angulares `<...>`, que es lo mismo que `'http', '://', 'example', '.com'`.

1. El meta-operador de reducción `[~]` coloca el operador de concatenación de cadenas `~` entre todos los elementos, por lo que `[~] @parts` une las cuatro partes en la cadena única `http://example.com`.

1. Almacenar el resultado en `$url` permite reutilizarlo: `$url.chars` luego indica que la URL ensamblada tiene `18` caracteres de longitud.

{% include nav.html %}
