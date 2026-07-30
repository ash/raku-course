---
title: Supplies
translations_gpt:
---

{% include menu.html %}

Dieser Unterteil handelt von _reaktiver_ Programmierung: Code zu schreiben, der auf einen Strom von Werten antwortet, sobald sie eintreffen, statt sie einen nach dem anderen anzufordern. Der zentrale Typ ist das _Supply_.

Ein Supply ist eine Quelle von Werten im Lauf der Zeit — stellen Sie es sich als Strom vor, den Sie abonnieren können. Sie hängen ein Stück Code an ein Supply, und dieser Code läuft einmal für **jeden** Wert, den das Supply erzeugt. Dieser Stil, bei dem „Werte zu Ihnen geschoben werden“, ist das Gegenteil davon, Werte aus einer Liste zu ziehen, und genau richtig für Ereignisse, Nachrichten und lebende Daten.

{% include nav.html %}
