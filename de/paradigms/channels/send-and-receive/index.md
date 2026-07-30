---
title: Senden und empfangen
translations_gpt:
---

{% include menu.html %}

Erzeugen Sie einen Kanal mit `Channel.new`. Legen Sie Werte mit `.send` hinein und nehmen Sie sie mit `.receive` heraus:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Ein Kanal ist eine **Warteschlange**: Werte kommen in derselben Reihenfolge heraus, in der sie hineingingen — first in, first out. Die erste `.receive` liefert also `1`, den zuerst gesendeten Wert.

Der Sinn eines Kanals ist, dass Senden und Empfangen zugleich aus **verschiedenen Threads** heraus sicher sind. Ein Erzeuger kann weiter senden, während ein Verbraucher weiter empfängt, und Raku sorgt dafür, dass kein Wert verloren geht oder doppelt auftaucht:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Hier sendet eine Hintergrundaufgabe `1, 2, 3`; das Hauptprogramm empfängt. `.receive` wartet, wenn der Kanal gerade leer ist, der Verbraucher überholt den Erzeuger also nie.

{% include nav.html %}
