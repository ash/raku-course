---
title: Cargar en tiempo de ejecución
translations_gpt:
---

{% include menu.html %}

## Problema

Se te proporciona un módulo `Greeting.rakumod` que exporta una subrutina `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Carga este módulo con `require` en lugar de `use`, para que se incorpore en **tiempo de ejecución**. Dado que `require` no importa nombres automáticamente, indica el símbolo que deseas con `require Greeting <&hello>;`. Luego llama a `hello('Sam')` e imprime el resultado.

Para demostrar lo que te ofrece la carga en tiempo de ejecución, coloca el `require` dentro de un `sub MAIN` con una bandera `--quiet`, de modo que el módulo se cargue *solo* cuando realmente se desee un saludo. Con `--quiet`, el programa imprime `Silence.` y no toca el módulo en absoluto.

## Ejemplo

Al ejecutar con el módulo en la ruta de búsqueda, el programa imprime:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
