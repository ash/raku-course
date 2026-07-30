---
title: do und der Wert eines Blocks
---

{% include menu.html %}

Ein Block allein ist eine Anweisung, kein Ausdruck, daher kannst du ihn normalerweise nicht einer Variablen zuweisen. Das `do`-Präfix verwandelt einen Block in einen Ausdruck, dessen Wert der Wert der **letzten** Anweisung ist:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Innerhalb des Blocks kannst du Variablen deklarieren, mehrere Anweisungen ausführen und ein Ergebnis berechnen; `do` gibt zurück, was auch immer der Block ergibt. Das ist praktisch, wenn die Erzeugung eines Werts mehr als einen einzigen Ausdruck erfordert.

`do` funktioniert auch vor Kontrollfluss-Anweisungen und lässt diese ebenfalls einen Wert zurückgeben:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Hier verwandelt `do given` das gesamte `given`/`when` in einen Ausdruck, der `positive` liefert. Das funktioniert genauso mit `do if` und `do for`. Kurz gesagt: `do` ist die Methode, einen Block oder eine Kontrollstruktur an einer Stelle zu verwenden, die einen Wert erwartet.

{% include nav.html %}
