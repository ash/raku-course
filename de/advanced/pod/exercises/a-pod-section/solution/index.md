---
title: 'Solution: Ein Pod-Abschnitt'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 Du findest den Quellcode in der Datei [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku).

## Ausgabe

```
2
```

## Kommentare

1. `$=pod` enthaelt das Pod der Datei als Liste von Bloecken; `$=pod[0]` ist der einzelne `=begin pod`-Block.

1. Seine `.contents` sind die darin verschachtelten Bloecke -- die `=head1`-Ueberschrift und der Absatz -- daher ist `.contents.elems` gleich `2`. So durchlaeuft ein Programm die Struktur, um seine eigene Dokumentation als Daten zu lesen.

{% include nav.html %}
