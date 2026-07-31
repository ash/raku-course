---
title: 'Solución: Cifrado César'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Puedes encontrar el código fuente en el archivo [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Salida

```
KHOOR
```

## Comentarios

1. El operador de transliteración `tr///` asocia los caracteres del primer conjunto con
los del segundo, posición por posición. `A..Z` se alinea con `D..ZA..C`, así que `A` se
convierte en `D`, `B` en `E`, y la cola `X Y Z` da la vuelta a `A B C`.

1. `tr///` cambia la cadena en su sitio, así que el propio `$text` contiene la palabra
cifrada tras la coincidencia.

{% include nav.html %}
