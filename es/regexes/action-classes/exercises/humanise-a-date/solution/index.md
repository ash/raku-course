---
title: 'Solución: Haga una fecha legible'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Puedes encontrar el código fuente en el archivo [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Salida

```
5 July 2026
```

## Comentarios

1. A diferencia de una simple acción aritmética, los métodos de los tokens producen valores de **clases distintas**: `year` y `day` producen enteros, pero `month` produce una *cadena* usando su valor numérico como índice en una lista de nombres de mes. `$/ - 1` convierte en número la coincidencia de dos dígitos (`07` → `7`) y pasa a un índice que empieza en cero, así que el `month` `07` produce `July`.

1. El método `TOP` nunca vuelve a examinar el texto en bruto. Solo lee los tres valores que ya produjeron los submétodos — `$<day>.made`, `$<month>.made`, `$<year>.made` — y los interpola en la cadena final. Leer `5` de vuelta desde `day` elimina además gratis el cero inicial.

1. Ese es el trabajo cotidiano de una clase de acciones: analizar una vez la entrada estructurada y dejar después que cada método convierta su propia pieza en lo que el resto del programa necesite.

{% include nav.html %}
