---
title: Das Metaobjektprotokoll
translations_gpt:
---

{% include menu.html %}

Jede Klasse, jede Rolle und jeder Typ in Raku wird selbst durch ein weiteres Objekt beschrieben — sein _Metaobjekt_ —, das den Namen des Typs kennt, seine Attribute, seine Methoden und seinen Platz im Vererbungsbaum. Die Schnittstelle zu diesen Metaobjekten ist das _Metaobjektprotokoll_, kurz MOP.

Einen Winkel davon haben Sie bereits genutzt: `.^name` ist ein MOP-Aufruf. Dieser Abschnitt zeigt die `.^`-Syntax gründlich, die nützlichsten Metamethoden zum Untersuchen eines Typs und wie das MOP es sogar erlaubt, einer Klasse zur Laufzeit Methoden hinzuzufügen.

{% include nav.html %}
