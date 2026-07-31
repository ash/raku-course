---
title: Escribir una clase de acción
translations_gpt:
---

{% include menu.html %}

Una clase de acciones es una clase ordinaria con un método por cada token de la gramática. Cada método recibe la coincidencia de ese token como `$/` y llama a `make` para adjuntar un valor: exactamente lo que hacía el bloque en línea, pero mantenido aparte del patrón:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

La gramática contiene ahora solo el patrón; todo el significado vive en `SumActions`. Fíjate en cómo cooperan los métodos: `a` y `b` producen cada uno un entero, y `TOP` los lee con `$<a>.made` y `$<b>.made` y produce su suma.

Para usar la clase de acciones, pasa una instancia a `.parse` con el argumento con nombre `actions` y lee después el resultado de arriba con `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Mientras la gramática analiza, el método de cada token se ejecuta automáticamente y construye el valor de abajo arriba. El resultado de la coincidencia de arriba es el valor que quieres: aquí, el número `5`.

{% include nav.html %}
