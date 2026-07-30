---
title: Iteratoren
translations_gpt:
---

{% include menu.html %}

Der vorige Abschnitt hat Sequenzen mit `gather` und `take` gebaut. Dieser geht eine Ebene tiefer, zu dem Mechanismus, der die Werte tatsächlich liefert: dem _Iterator_.

Ein Iterator ist das kleine Objekt hinter jeder Liste, jedem Bereich und jeder trägen Sequenz in Raku. Er kann eines — den **nächsten** Wert erzeugen — und sonst nichts. Wann immer Sie eine `for`-Schleife schreiben oder `map` aufrufen, bittet Raku im Stillen einen Iterator um einen Wert nach dem anderen, bis keiner mehr da ist. Dieser Abschnitt zeigt dieses Protokoll unmittelbar: wie Sie einem Iterator von Hand Werte entnehmen und wie Sie einen eigenen Iterator schreiben.

{% include nav.html %}
