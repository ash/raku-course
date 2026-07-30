---
title: Über das Ende hinaus empfangen
translations_gpt:
---

{% include menu.html %}

Was geschieht, wenn Sie `.receive` öfter aufrufen, als es Werte zu holen gibt? Die Antwort hängt davon ab, ob der Kanal **geschlossen** wurde.

Nehmen Sie das Erzeuger-Verbraucher-Beispiel von zuvor: Eine Hintergrundaufgabe sendet drei Werte und schließt den Kanal. Was, wenn der Verbraucher nach einem vierten fragt?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # one receive too many
```

## Auf einem geschlossenen Kanal wirft ein zusätzliches receive

Das Schließen wirft die bereits eingereihten Werte nicht weg — die drei `.receive`-Aufrufe oben liefern weiterhin `1`, `2` und `3`. Doch sobald der Kanal geschlossen **und** leer ist, können nie mehr Werte ankommen, statt Sie ewig warten zu lassen, löst Raku also eine Ausnahme aus:

```
Cannot receive a message on a closed channel
```

Die Ausnahme ist `X::Channel::ReceiveOnClosed`. Das ist hilfreich und nicht lästig: Es sagt dem Verbraucher unmissverständlich, dass er den Kanal geleert hat. In der Praxis vermeiden Sie sie, indem Sie mit `.list` verbrauchen (das sauber beim Schließen anhält) oder nur so lange schleifen, wie Werte übrig sind — beides auf der vorigen Seite gezeigt.

## Auf einem offenen Kanal blockiert ein zusätzliches receive

Schließt der Erzeuger den Kanal nie, kann `.receive` nicht wissen, ob noch ein Wert kommt, es **wartet** also schlicht:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # waits here — the channel is open but empty
```

Das Programm bleibt beim zweiten `.receive` hängen, denn *vielleicht* wird noch ein Wert gesendet. Das ist die Gefahr, vor der die vorige Seite gewarnt hat: Vergessen Sie das `.close`, und aus einem gewöhnlichen „warte auf den nächsten Wert“ wird ein Warten ohne Ende.

Die beiden Ausgänge sind also auf nützliche Weise entgegengesetzt. Ein **geschlossener** Kanal scheitert rasch, wenn er leer ist — Sie bekommen eine Ausnahme, die Sie sehen und fangen können. Ein **offener** Kanal wartet weiter — genau richtig, solange ein Erzeuger noch arbeitet, aber ein stilles Hängen, wenn der Erzeuger leise aufgehört hat, ohne zu schließen. Den Kanal zu schließen ist genau das, was dieses stille Hängen in ein klares Zeichen verwandelt, dass der Strom geendet hat.

{% include nav.html %}
