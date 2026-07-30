---
title: 'Lösung: Empfangen Sie einen Wert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Du findest den Quellcode in der Datei [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Ausgabe

```
a
```

## Kommentare

1. Ein Kanal liefert Werte in der Reihenfolge zurück, in der sie gesendet wurden.

1. `'a'` wurde zuerst gesendet, die erste `.receive` liefert es also.

{% include nav.html %}
