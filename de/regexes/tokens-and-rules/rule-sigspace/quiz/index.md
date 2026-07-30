---
title: 'Quiz — Tokens und Rules'
translations_gpt:
---

{% include menu.html %}

Welches Schlüsselwort nehmen Sie für ein benanntes Muster, das **Leerraum** zwischen seinen Teilen treffen muss, so wie er im Muster geschrieben steht?

{:.quiz}
0 | `regex`
0 | `token`
1 | `rule`
0 | `grammar`

{% include quiz.html %}

<div class="extended-explanation">

Eine `rule` ist ein `token` mit eingeschaltetem bedeutsamem Leerraum, die zwischen ihren Teilen geschriebenen Leerzeichen müssen also in der Eingabe vorkommen. Ein schlichtes `token` übergeht diese Leerzeichen, und `regex` tut das ebenfalls (und weicht zusätzlich zurück).

</div>

{% include nav.html %}
