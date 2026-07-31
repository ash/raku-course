---
title: Quiz — Tokens y reglas
translations_gpt:
---

{% include menu.html %}

¿Qué palabra clave deberías usar para un patrón con nombre que tiene que emparejar **espacio en blanco** entre sus partes, tal como está escrito en el patrón?

{:.quiz}
0 | `regex`
0 | `token`
1 | `rule`
0 | `grammar`

{% include quiz.html %}

<div class="extended-explanation">

Una `rule` es un `token` con el espacio en blanco significativo activado, así que los espacios escritos entre sus partes tienen que aparecer en la entrada. Un `token` a secas ignora esos espacios, y `regex` también (además de retroceder).

</div>

{% include nav.html %}
