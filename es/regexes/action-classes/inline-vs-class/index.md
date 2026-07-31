---
title: Acciones en línea frente a clases de acción
translations_gpt:
---

{% include menu.html %}

Ya tienes dos formas de adjuntar significado a un análisis. ¿Cuál usar?

Las **acciones en línea** ponen un bloque `{ make … }` justo dentro del token:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Son rápidas de escribir y valen para una gramática minúscula o un guion de usar y tirar. El precio es que el patrón y la lógica quedan enredados.

Una **clase de acciones** mantiene separadas ambas cosas: la gramática describe la forma y la clase de acciones describe el significado:

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

Esta separación tiene ventajas reales cuando una gramática crece: el patrón sigue siendo legible y puedes emparejar **una gramática con varias clases de acciones** — una que evalúe, otra que formatee, otra que construya una estructura de datos — sin tocar la gramática en absoluto.

La regla práctica: acciones en línea para algo pequeño y desechable, y una clase de acciones para cualquier cosa que vayas a mantener o reutilizar.

{% include nav.html %}
