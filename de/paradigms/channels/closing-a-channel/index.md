---
title: Einen Kanal schließen
translations_gpt:
---

{% include menu.html %}

Hat ein Erzeuger keine Werte mehr zu senden, ruft er `.close` auf dem Kanal auf. Das Schließen meldet dem Verbraucher, dass der Strom geendet hat.

Am bequemsten verbraucht man einen geschlossenen Kanal mit `.list`, das Ihnen jeden verbleibenden Wert gibt und endet, sobald der Kanal geschlossen ist:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Da `.list` auf das Schließen des Kanals wartet, eignet es sich bestens für „sammle alles, was der Erzeuger sendet“. Sie können das Ergebnis wie jede andere Liste behandeln — summieren, zählen und so weiter:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Das Schließen ist es, woran ein Verbraucher erkennt, wann er aufhören soll. Ohne es würde `.list` (oder eine Schleife aus `.receive`) ewig auf einen Wert warten, der nie kommt. Schließen Sie einen Kanal stets, wenn das Senden erledigt ist.

{% include nav.html %}
