---
title: Quiz — Heredar gramáticas
translations_gpt:
---

{% include menu.html %}

¿Qué palabra clave hace que una gramática herede de otra?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

Una gramática es una clase de clase, así que usa la misma palabra clave de herencia: `grammar Loud is Base { … }`. La gramática derivada hereda entonces los tokens de la base y puede sobrescribir algunos sueltos.

</div>

{% include nav.html %}
