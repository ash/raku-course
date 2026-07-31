---
title: Un MAIN tipado
translations_gpt:
---

{% include menu.html %}

## Problema

Una restricción de tipo en un parámetro de `MAIN` también se verifica antes de que se ejecute el cuerpo. Escribe un programa cuyo `MAIN` tome un único `Int $n` e imprima `$n` duplicado. Si el argumento no es un entero válido, la firma no coincide y Raku imprime el mensaje de uso en su lugar — obtienes la validación de forma gratuita.

## Ejemplo

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
