---
title: 'Lösung: Zwei Threads'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Du findest den Quellcode in der Datei [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Ausgabe

```
500
```

## Kommentare

1. Die beiden Threads laufen nebenläufig und schreiben ihr Ergebnis jeweils in eine eigene gemeinsame Variable.

1. `$x` und `$y` zu lesen geschieht erst **nach** beiden `.finish`-Aufrufen, die Ergebnisse sind also gewiss bereit: `100 + 400` ist `500`. Vor dem Lesen zusammenzuführen ist es, was den Wert verlässlich macht.

{% include nav.html %}
