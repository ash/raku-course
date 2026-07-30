---
title: 'Lösung: Zählen Sie die Aussendungen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Du findest den Quellcode in der Datei [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Ausgabe

```
5
```

## Kommentare

1. Die Zapfstelle läuft einmal je ausgesandtem Wert, gleich welche Werte es sind.

1. `$count` jedes Mal zu erhöhen ergibt die Gesamtzahl der Werte, `5`.

{% include nav.html %}
