---
title: 'Lösung: In einem Thread ausführen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Du findest den Quellcode in der Datei [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Ausgabe

```
working
```

## Kommentare

1. `Thread.start` führt den Block auf einem neuen Thread aus.

1. `.finish` wartet auf das Ende des Threads, das Programm endet also nicht, bevor `working` ausgegeben ist.

{% include nav.html %}
