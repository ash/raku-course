---
title: Quiz — Distributionen
---

{% include menu.html %}

Welche Datei beschreibt eine Raku-Distribution — ihren Namen, ihre Version und was sie bereitstellt?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Eine Distribution wird durch `META6.json` beschrieben, eine JSON-Datei in ihrem obersten Verzeichnis. Ihr `provides`-Schlüssel bildet jeden Modulnamen auf seine Quelldatei ab, und `depends` listet die anderen Distributionen auf, die sie benötigt.

</div>

{% include nav.html %}
