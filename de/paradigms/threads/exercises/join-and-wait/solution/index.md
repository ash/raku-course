---
title: 'Lösung: Zusammenführen und warten'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Du findest den Quellcode in der Datei [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Ausgabe

```
first
second
```

## Kommentare

1. `.finish` blockiert, bis der Thread `first` ausgegeben hat.

1. Erst danach läuft das Hauptprogramm weiter und gibt `second` aus, die Reihenfolge steht also fest. Ohne `.finish` könnten die beiden Zeilen in beliebiger Reihenfolge erscheinen.

{% include nav.html %}
