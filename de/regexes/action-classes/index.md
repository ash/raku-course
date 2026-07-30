---
title: Aktionsklassen
translations_gpt:
---

{% include menu.html %}

Inline stehende `{ make … }`-Blöcke funktionieren, aber sie überfrachten eine Grammatik mit Logik und machen sie schwerer lesbar. Die ordentliche Lösung ist eine _Aktionsklasse_: eine eigene Klasse, deren Methoden nach den Tokens der Grammatik benannt sind und das `make` für jedes davon liefern.

Dieser Abschnitt zeigt, wie Sie eine Aktionsklasse schreiben, wie Sie sie `.parse` übergeben und wann Sie sie inline stehenden Aktionen vorziehen.

{% include nav.html %}
