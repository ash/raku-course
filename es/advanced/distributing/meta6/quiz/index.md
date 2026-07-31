---
title: Quiz — Distribuciones
translations_gpt:
---

{% include menu.html %}

¿Qué archivo describe una distribución de Raku — su nombre, versión y lo que proporciona?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Una distribución se describe mediante `META6.json`, un archivo JSON en su directorio raíz. Su clave `provides` mapea cada nombre de módulo a su archivo fuente, y `depends` lista las otras distribuciones que necesita.

</div>

{% include nav.html %}
