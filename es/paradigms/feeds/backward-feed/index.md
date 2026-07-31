---
title: El flujo hacia atrás
translations_gpt:
---

{% include menu.html %}

Todos los flujos vistos hasta ahora fluían hacia delante con `==>`, desde una fuente a la izquierda hacia un destino a la derecha. Raku tiene también el operador espejo, `<==`, el **flujo hacia atrás**. Va al revés: el destino está a la **izquierda** y los datos se traen desde la fuente de la **derecha**.

Aquí tienes la tubería de números pares de antes, escrita hacia atrás:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Léela de derecha a izquierda: toma `1..10`, conserva los números pares y recógelos en `@evens`. El resultado es exactamente el mismo que el de `(1..10) ==> grep(* %% 2) ==> my @evens`: solo ha cambiado la dirección en la que escribes las etapas.

Los flujos hacia atrás se encadenan igual, y de nuevo el destino va primero:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

El trabajo sigue ocurriendo desde la fuente — empieza con `1..10`, conserva los pares, elévalos al cuadrado —, pero en la página las etapas se enumeran desde el destino hacia el origen. El orden de los elementos queda intacto; `<==` cambia solo la dirección de lectura, nunca los datos.

Como el código suele leerse de izquierda a derecha, el `==>` hacia delante tiende a leerse con más naturalidad: primero te encuentras los datos y los sigues hasta donde aterrizan. El `<==` hacia atrás está ahí para las ocasiones en que empezar por el destino cuenta mejor la historia, nombrando *lo que estás construyendo* antes que *aquello con lo que se construye*. Son espejos exactos, así que elige la dirección que mejor se lea.

{% include nav.html %}
