---
title: 'Quiz — Die Umgebung'
translations_gpt:
---

{% include menu.html %}

Welche Variable enthält die Umgebungsvariablen des Programms?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` ist die dynamische Hash der Umgebungsvariablen, die man namentlich als `%*ENV<HOME>` liest. `@*ARGS` enthält stattdessen die Befehlszeilenargumente.

</div>

{% include nav.html %}
