---
title: Heredocs
---

{% include menu.html %}

Ein _Heredoc_ ist eine Quoting-Form für mehrzeiligen Text. Anstelle von Trennzeichen um den Text herum gibst du mit `:to` ein Abschlusswort an, und der String reicht von der nächsten Zeile bis zu einer Zeile, die nur dieses Wort enthält:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Die Ausgabe ist:

```
Hello,
World!
```

Das Abschlusswort (`END` hier — jedes Wort ist möglich) markiert, wo der Text endet. Beachte das `print`: Der Text behält den Zeilenumbruch, der vor dem Abschlusswort steht, sodass er bereits mit einem Zeilenumbruch endet — `say` würde einen zweiten hinzufügen und eine zusätzliche Leerzeile erzeugen. Da das Heredoc mit `q:to` beginnt, wird der Text nicht interpoliert; verwende `qq:to`, um Variablen zu interpolieren:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Ein nützliches Detail: Die **Einrückung des schließenden Abschlusswortes** wird von jeder Zeile des Textes entfernt. So kannst du ein Heredoc passend zum umgebenden Code einrücken, ohne dass diese Einrückung im String landet:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Dies gibt dasselbe `Hello,` und `World!` wie das erste Beispiel aus. Hier ist das schließende `END` um acht Leerzeichen eingerückt, also werden acht Leerzeichen von jeder Zeile entfernt, und der zurückgegebene String ist einfach `Hello,\nWorld!` ohne führende Leerzeichen.

Das schließende Abschlusswort bestimmt, wie viel entfernt wird, daher muss jede Zeile des Textes mindestens so weit eingerückt sein. Wenn eine Zeile weniger führende Leerzeichen hat, kann Raku die volle Menge nicht entfernen und warnt — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Halte das Abschlusswort nicht tiefer eingerückt als die am wenigsten eingerückte Zeile, um dies zu vermeiden. Heredocs sind die natürliche Wahl für Templates, Nachrichten und jeden Textblock, der mehrere Zeilen umfasst.

{% include nav.html %}
