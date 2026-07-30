---
title: Werte in Text umwandeln
---

{% include menu.html %}

Wenn ein Programm einen Wert anzeigt -- wenn du ihn mit `say` ausgibst, ihn druckst oder in einen String einfügst -- muss dieser Wert in Text umgewandelt werden. Raku hat dafür keinen einzigen festen Weg. Stattdessen verfügt jeder Wert über einige Standardmethoden, die jeweils einen String für einen bestimmten Zweck erzeugen:

* `.gist` -- eine menschenfreundliche Form, die `say` ausgibt.
* `.Str` -- die einfache Stringform, die im Stringkontext verwendet wird.
* `.raku` -- eine codeähnliche Form, praktisch beim Debuggen.

Alle drei sind gewöhnliche Methoden, die für jeden Wert in der Sprache definiert sind, sodass sie auf eine Zahl, einen String, ein Array oder ein eigenes Objekt gleich funktionieren. Die nächsten Seiten betrachten jede Methode der Reihe nach und helfen dir dann, die richtige auszuwählen; [der Abschnitt danach stellt `dd` vor](/de/advanced/dd), ein Rakudo-Werkzeug, das auf `.raku` aufbaut.

{% include nav.html %}
