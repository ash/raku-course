---
title: Anweisungspräfixe
---

{% include menu.html %}

Ein _Statement-Prefix_ ist ein Schlüsselwort, das vor eine Anweisung oder einen Block gesetzt wird, um deren Ausführung zu verändern. Du hast bereits eines kennengelernt — `gather`, das alles sammelt, was ein Block an `take` übergibt. In diesem Abschnitt werden einige weitere allgemeine Präfixe vorgestellt.

Mit Präfixen kannst du einen Block in einen Ausdruck verwandeln, der einen Wert liefert (`do`), steuern, ob eine Liste sofort oder bei Bedarf berechnet wird (`eager` und `lazy`), und Code rein wegen seiner Seiteneffekte ausführen oder dessen Warnungen unterdrücken (`sink` und `quietly`).

{% include nav.html %}
