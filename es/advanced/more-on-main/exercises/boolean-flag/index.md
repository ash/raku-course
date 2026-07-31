---
title: Un flag de línea de comandos
translations_gpt:
---

{% include menu.html %}

## Problema

Un parámetro con nombre de tipo `Bool` en `MAIN` se convierte en una **bandera** de activación/desactivación: escribir `--flag` lo establece en `True`, y omitirlo mantiene su valor predeterminado. Escribe un programa cuyo `MAIN` tome `Bool :$shout = False` e imprima `HELLO` cuando la bandera esté activada, o `hello` en caso contrario.

## Ejemplo

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
