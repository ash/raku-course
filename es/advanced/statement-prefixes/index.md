---
title: Prefijos de sentencia
translations_gpt:
---

{% include menu.html %}

Un _prefijo de sentencia_ es una palabra clave colocada delante de una sentencia o bloque para cambiar la forma en que se ejecuta. Ya has conocido uno: `gather`, que recopila todo lo que un bloque le entrega a `take`. Esta sección presenta algunos prefijos de propósito general más.

Con los prefijos puedes convertir un bloque en una expresión que produce un valor (`do`), controlar si una lista se calcula inmediatamente o bajo demanda (`eager` y `lazy`), y ejecutar código puramente por sus efectos secundarios o con sus advertencias silenciadas (`sink` y `quietly`).

{% include nav.html %}
