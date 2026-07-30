---
title: Generatoren
translations_gpt:
---

{% include menu.html %}

Ein _Generator_ ist eine Routine, die eine Reihe von Werten einen nach dem anderen erzeugt und jeden auf Anforderung liefert, statt die ganze Liste vorab zu bauen. Raku schreibt das mit dem Paar `gather` / `take`: Innerhalb eines `gather`-Blocks reicht jedes `take` einen Wert an die entstehende Sequenz, und der Block pausiert genau dort, bis der nächste Wert abgeholt wird.

Weil die Werte träge erzeugt werden — erst, wenn nach ihnen gefragt wird —, kann ein Generator sogar eine endlose Reihe beschreiben. Dieser Abschnitt zeigt, wie man Sequenzen mit `gather` und `take` baut. Die tieferliegende Maschinerie, die diese Werte tatsächlich einen nach dem anderen herausholt, ist das Thema des nächsten Abschnitts, [Iteratoren](/de/paradigms/iterators).

{% include nav.html %}
