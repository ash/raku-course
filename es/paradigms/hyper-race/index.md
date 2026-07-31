---
title: hyper y race 🆕
translations_gpt:
---

{% include menu.html %}

Las operaciones funcionales sobre listas que conociste antes — `map` y `grep` — procesan sus elementos uno tras otro. Cuando el trabajo sobre cada elemento es independiente y sustancial, Raku puede ejecutarlo **en paralelo** repartido entre varios núcleos de CPU, casi sin cambiar tu código.

Dos métodos lo activan: `.hyper`, que mantiene los resultados en orden, y `.race`, que no lo hace pero puede ser algo más rápido. Esta sección muestra ambos.

{% include nav.html %}
