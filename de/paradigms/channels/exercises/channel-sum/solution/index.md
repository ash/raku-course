---
title: 'Lösung: Summieren Sie einen Kanal'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 Du findest den Quellcode in der Datei [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Ausgabe

```
21
```

## Kommentare

1. Das Erzeuger-Promise sendet die sechs Werte auf einem Thread und schließt den Kanal. Das Verbraucher-Promise auf einem anderen Thread sammelt mit `.list` alles bis zum Schließen und liefert die Summe (`[+]` addiert `1 + 2 + … + 6`).

1. `await $producer, $consumer` wartet auf **beide** Promises und liefert ihre Ergebnisse in Reihenfolge. Das Ergebnis des Erzeugers wird hier nicht gebraucht (`$sent`); das des Verbrauchers ist die Summe, `21`. Der Kanal ist es, der die Werte sicher vom Erzeuger-Thread zum Verbraucher-Thread trägt.

{% include nav.html %}
