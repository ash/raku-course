---
title: Sofortige Auswertung erzwingen
---

{% include menu.html %}

## Aufgabe

Das `eager`-Präfix bewirkt das Gegenteil von `lazy`: Es erzwingt, dass eine Liste vollständig erzeugt wird, sodass sie nicht mehr lazy ist. Zeige den Kontrast mit `.is-lazy`.

Gib aus, ob der unendliche Bereich `1 .. Inf` lazy ist, dann ob `eager 1..3` lazy ist, und schließlich ob `lazy 1..3` lazy ist. Die Ergebnisse sollten `True`, `False`, `True` sein.

## Beispiel

Das Programm gibt aus:

```
True
False
True
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
