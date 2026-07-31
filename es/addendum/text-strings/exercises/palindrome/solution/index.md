---
title: 'Solución: Comprobación de palíndromo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Puedes encontrar el código fuente en el archivo [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Salida

```
level: yes
hello: no
racecar: yes
```

## Comentarios

1. `.flip` invierte los caracteres de una cadena. Una palabra es un palíndromo
exactamente cuando es igual a su propia inversa, cosa que el ternario convierte en
`yes` o `no`.

{% include nav.html %}
