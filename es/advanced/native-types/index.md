---
title: Tipos nativos
---

{% include menu.html %}

Los tipos que has usado hasta ahora — `Int`, `Num`, `Str` — son objetos completos de Raku: flexibles, introspectables y de tamaño arbitrario. Raku también ofrece una familia paralela de tipos _nativos_ que se corresponden directamente con la representación propia de la máquina: `int`, `num`, `str` y un conjunto de enteros con tamaño definido.

Los tipos nativos se escriben en minúsculas. Sacrifican flexibilidad a cambio de velocidad y un tamaño fijo, y se comportan de manera un poco diferente a sus equivalentes encapsulados. Esta sección muestra qué son y cómo su tamaño fijo puede provocar desbordamiento.

{% include nav.html %}
