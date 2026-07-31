---
title: Documentar código
translations_gpt: true
---

{% include menu.html %}

Raku tiene un marcado de documentación integrado en el lenguaje, llamado _Pod_ (o _Rakudoc_). Escribes la documentación directamente en tu archivo fuente usando directivas `=`, y el compilador puede tanto renderizarla como ponerla a disposición de tu programa.

Esta sección cubre las directivas básicas de Pod, los códigos de formato para marcar texto y cómo acceder a la documentación — ya sea como texto renderizado con `raku --doc`, o como datos a través de la variable `$=pod`.

{% include nav.html %}
