---
title: Variables especiales y dinámicas
---

{% include menu.html %}

Los nombres de variables en Raku pueden llevar un segundo marcador después del sigilo, llamado _twigil_. El twigil te indica algo sobre dónde vive la variable y cómo se encuentra — si tiene ámbito dinámico, si la proporciona el compilador o si está vinculada a un objeto.

Esta sección explica los twigils, examina de cerca el tipo más útil — las variables _dinámicas_, que se buscan a través de la pila de llamadas en lugar del ámbito léxico habitual — y repasa las variables especiales que Raku predefine para ti.

{% include nav.html %}
