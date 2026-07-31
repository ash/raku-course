---
title: Promesas
translations_gpt:
---

{% include menu.html %}

Una _promesa_ representa un trabajo que terminará en algún momento y producirá un resultado (o fallará). Las promesas son la manera de alto nivel y de todos los días de hacer concurrencia en Raku: arrancas un trabajo, recibes de inmediato una promesa y recoges el resultado cuando lo necesitas.

A diferencia de los hilos en crudo, las promesas son fáciles de combinar: puedes esperar varias a la vez o encadenar una al resultado de otra. Y mientras que un hilo solo te deja *esperar* a que el trabajo acabe, esperar una promesa te entrega el **valor** que produjo — y relanza cualquier error que encontrara —, así que rara vez tienes que pasar tú mismo los resultados por variables compartidas. Esta sección cubre cómo arrancar promesas, esperar sus resultados y combinarlas.

{% include nav.html %}
