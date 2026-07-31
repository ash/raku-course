---
title: Quiz — Token e regole
translations_gpt:
---

{% include menu.html %}

Quale parola chiave dovresti usare per uno schema con nome che deve riconoscere lo **spazio bianco** fra le sue parti, così come è scritto nello schema?

{:.quiz}
0 | `regex`
0 | `token`
1 | `rule`
0 | `grammar`

{% include quiz.html %}

<div class="extended-explanation">

Una `rule` è un `token` con lo spazio bianco significativo acceso, quindi gli spazi scritti fra le sue parti devono comparire nell'input. Un semplice `token` ignora quegli spazi, e anche `regex` fa lo stesso (oltre a tornare sui propri passi).

</div>

{% include nav.html %}
