---
title: 'Lösung: Leeren Sie einen Kanal'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Du findest den Quellcode in der Datei [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Ausgabe

```
a,b
```

## Kommentare

1. `.list` holt jeden im geschlossenen Kanal verbliebenen Wert der Reihe nach heraus.

1. `.join(',')` klebt die beiden Zeichenketten mit einem Komma dazwischen zusammen.

{% include nav.html %}
