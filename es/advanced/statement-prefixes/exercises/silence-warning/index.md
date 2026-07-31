---
title: Silenciar una advertencia
translations_gpt:
---

{% include menu.html %}

## Problema

`quietly` suprime las advertencias y, al igual que `do`, devuelve el valor de su bloque. Declara una variable de nombre sin valor, luego construye un saludo `"Hello, " ~ $name ~ "!"` dentro de un bloque `quietly` para que la advertencia de "valor no inicializado" se oculte. Asigna el valor del bloque a `$greeting` e imprímelo.

## Ejemplo

El programa imprime:

```
Hello, !
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
