---
title: Code dokumentieren
---

{% include menu.html %}

Raku hat eine in die Sprache eingebaute Dokumentations-Auszeichnungssprache namens _Pod_ (oder _Rakudoc_). Du schreibst Dokumentation direkt in deiner Quelldatei mithilfe von `=`-Direktiven, und der Compiler kann sie sowohl rendern als auch deinem Programm zur Verfügung stellen.

Dieser Abschnitt behandelt die grundlegenden Pod-Direktiven, die Formatierungscodes zum Auszeichnen von Text und den Zugriff auf die Dokumentation — entweder als gerenderten Text mit `raku --doc` oder als Daten über die Variable `$=pod`.

{% include nav.html %}
