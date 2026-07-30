---
title: Der Zerlegungsbaum, make und made
translations_gpt:
---

{% include menu.html %}

Das Zerlegen sagt Ihnen, dass eine Zeichenkette zu einer Grammatik passt, und es baut einen _Zerlegungsbaum_ — ein Match-Objekt mit einem benannten Capture für jedes Token. Meist wollen Sie aber nicht den blanken Text, sondern ein **Ergebnis**: die ganze Zahl `42`, nicht die Zeichen `4` und `2`.

Dieser Abschnitt zeigt, wie Sie durch den Zerlegungsbaum gehen und wie Sie mit `make` einen berechneten Wert an einen Treffer hängen und ihn mit `made` wieder auslesen.

{% include nav.html %}
