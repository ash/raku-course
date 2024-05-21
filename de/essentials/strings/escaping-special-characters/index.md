---
title: Sonderzeichen in Raku-Strings maskieren
---

{% include menu.html %}

Stellen Sie sich vor, Sie möchten ein Preisschild drucken und sowohl den Namen des Produkts als auch dessen Preis in Skalaren speichern?

```raku
my $product = 'Electricity';
my $price = 3.14;
```

Wie drucken Sie das Schild, wenn der Preis in Dollar angegeben werden soll? Die erwartete Ausgabe ist: `Electricity costs $3.14`. Ein Dollarzeichen in doppelt-angeführten Strings ist ein Indikator für eine zu interpolierende Variable. Um das `$`-Zeichen selbst zu drucken, müssen Sie es maskieren:

```raku
say "$product costs \$$price";
```

Natürlich können Sie auch String-Konkatenation verwenden und das Maskieren von `$` vermeiden:

```raku
say $product ~ ' costs $' ~ $price;
```

Diese Variante druckt genau denselben String, aber die Interpolation wirkt natürlicher und ist leichter zu lesen. Beachten Sie, dass das `$`-Zeichen in einem einfach-angeführten String weder interpoliert noch maskiert wurde: `' costs $'`. Das ist der Hauptunterschied. Sonderzeichen in einfachen Anführungszeichen erscheinen unverändert.

Hier sind einige weitere Sonderzeichen, die in doppelt-angeführten Strings eine besondere Bedeutung haben:

`\$` | Dollarzeichen
`\n` | Zeilenumbruch
`\r` | Wagenrücklauf
`\t` | Horizontaler Tabulator
`\"` | Doppelte Anführungszeichen
`\\` | Rückwärtsschrägstrich

Die Art und Weise, wie Sie den String anführen, definiert, wie Raku Sonderzeichen behandelt. Betrachten Sie diese beiden Beispiele:

```raku
say 'One\nTwo';
say "Three\nFour";
```

Wenn Sie dieses Programm ausführen, werden Sie sehen, dass der erste String unverändert in einer einzigen Zeile erscheint. Der zweite String wurde in zwei Teile aufgeteilt:

    One\nTwo
    Three
    Four

In doppelt-angeführten Strings wurde die spezielle Sequenz `\n` als Zeilenumbruch verarbeitet, während sie in einem String in einfachen Anführungszeichen eine reguläre Sequenz von zwei Zeichen war: `\` und `n`.

Es gibt eine interessante Ausnahme für `'` und `\`. In einfachen Anführungszeichen können Sie ein einfaches Anführungszeichen maskieren, indem Sie ihm ein weiteres `\` voranstellen:

```raku
say '\''; # '
```

Ein Rückwärtsschrägstrich muss ebenfalls maskiert werden, wenn ihm ein einfaches Anführungszeichen folgt:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}