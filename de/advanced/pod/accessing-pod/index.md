---
title: Auf Pod zugreifen
---

{% include menu.html %}

Neben dem Rendern kann ein Programm sein eigenes Pod auch **von innen** lesen, waehrend es laeuft. Die spezielle Variable `$=pod` enthaelt das Pod der aktuellen Datei als Liste von Block-Objekten, sodass ein Programm seine eigene Dokumentation inspizieren kann:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` hat hier ein Element -- den `pod`-Block -- und du kannst in ihn hineinnavigieren, um Ueberschriften, Absaetze und Elemente als Daten zu lesen. Darauf verlassen sich Werkzeuge, die Dokumentation generieren oder prüfen, ob sie vorhanden ist. Ob mit `--doc` gerendert oder über `$=pod` gelesen -- die Dokumentation ist ein vollwertiger Teil des Programms, kein Kommentar, der entfernt wird.

{% include nav.html %}
