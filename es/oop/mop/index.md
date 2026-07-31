---
title: El protocolo de metaobjetos 🆕
translations_gpt:
---

{% include menu.html %}

Cada clase, rol y tipo de Raku está descrito a su vez por otro objeto — su _metaobjeto_ —, que conoce el nombre del tipo, sus atributos, sus métodos y su lugar en el árbol de herencia. La interfaz hacia esos metaobjetos es el _protocolo de metaobjetos_, o MOP.

Ya has usado un rincón de él: `.^name` es una llamada al MOP. Esta sección presenta como es debido la sintaxis `.^`, los metamétodos más útiles para inspeccionar un tipo y cómo el MOP te permite incluso añadir métodos a una clase mientras el programa se ejecuta.

{% include nav.html %}
