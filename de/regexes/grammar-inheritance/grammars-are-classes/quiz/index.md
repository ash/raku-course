---
title: 'Quiz — Grammatiken erben'
translations_gpt:
---

{% include menu.html %}

Welches Schlüsselwort lässt eine Grammatik von einer anderen erben?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

Eine Grammatik ist eine Art Klasse, sie verwendet also dasselbe Schlüsselwort für die Vererbung: `grammar Loud is Base { … }`. Die abgeleitete Grammatik erbt dann die Tokens der Basis und darf einzelne überschreiben.

</div>

{% include nav.html %}
