---
title: Pod-Grundlagen
---

{% include menu.html %}

Pod-Dokumentation befindet sich in deiner Quelldatei und wird durch Zeilen abgegrenzt, die mit `=` beginnen. Der einfachste Weg, einen Block zu schreiben, ist zwischen `=begin pod` und `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Innerhalb des Blocks beschreiben Direktiven die Struktur:

* `=head1`, `=head2`, ... — Ueberschriften auf verschiedenen Ebenen
* ein normaler Absatz — einfach Text in eigenen Zeilen
* `=item` — ein Element in einer Aufzählungsliste

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

Die Zeile `=head1` ist eine Ueberschrift der obersten Ebene; die drei `=item`-Zeilen bilden eine Liste. Pod steht neben deinem Code, ohne ihn zu beeinflussen — der Compiler ignoriert es beim Ausführen des Programms, kann es aber auf Anfrage extrahieren und rendern, wie das letzte Thema zeigt.

{% include nav.html %}
