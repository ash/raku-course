---
title: 'Solución: Analice una hora'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Puedes encontrar el código fuente en el archivo [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Salida

```
｢45｣
```

## Comentarios

1. `TOP` describe la hora entera como tres tokens separados por dos puntos. Cada parte es `\d ** 2` — exactamente dos dígitos — en lugar de un `\d+` sin límite, así que un valor mal formado como `09:30:456` se rechaza. (Si una parte puede ir sin rellenar con ceros, como la hora en `9:30:45`, escribe `\d ** 1..2` para admitir uno o dos dígitos.)

1. Tras el análisis, cada token es una captura con nombre, así que el segundo se lee como `<second>` sobre la coincidencia. Añadir una tercera parte es solo un token más y otros dos puntos: la gramática escala con naturalidad.

{% include nav.html %}
