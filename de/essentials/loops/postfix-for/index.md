---
title: 'Postfix-Form von "for"'
---

{% include menu.html %}

Wir haben bereits andere Anweisungsmodifikatoren gesehen: [`if` und `else`](/de/essentials/conditional-checks/modifiers) und [`while` und `until`](/de/essentials/loops/modifiers). Und das ist ein Grund für eine kleine Feier, da das Design von Raku sehr konsistent ist.

Mit einem kurzen Schleifenkörper kann die `for`-Schleife in einer Postfix-Form geschrieben werden:

```raku
.say for 1..7;
```

Wie Sie sehen, sind Bereiche sehr natürlich, wenn sie mit der Postfix-Form von `for` verwendet werden.

Dieses Programm ist gleichwertig zu einer traditionelleren Variante:

```raku
for 1..7 -> $n {
    say $n;
}
```

Oder, wenn die Standard-Schleifenvariable verwendet wird, zu:

```raku
for 1..7 {
    .say;
}
```

Hier ist `.say` die Kurzform für `$_.say`.


{% include nav.html %}