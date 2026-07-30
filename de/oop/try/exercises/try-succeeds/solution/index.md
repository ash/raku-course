---
title: 'Lösung: Wenn nichts schiefgeht'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 Du findest den Quellcode in der Datei [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Ausgabe

```
True
42
```

## Kommentare

1. Läuft der `try`-Block ohne Ausnahme, ergibt er schlicht den Wert des Blocks.

1. `$r` enthält also `42`, und `$r.defined` ist `True`.

{% include nav.html %}
