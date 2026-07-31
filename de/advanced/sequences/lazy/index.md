---
title: Lazy und unendliche Sequenzen
---

{% include menu.html %}

Eine Sequenz muss nicht alle ihre Werte auf einmal berechnen. Raku-Sequenzen sind _lazy_: Jeder Wert wird erst erzeugt, wenn er tatsächlich benötigt wird. Das macht es möglich, eine Sequenz zu beschreiben, die überhaupt kein Ende hat.

Um eine unendliche Sequenz zu schreiben, verwende `Inf` als Endpunkt. Setze die Sequenz in Klammern, weil `...` schwächer bindet als `=`:

```raku
my $naturals = (1 ... Inf);
```

Ohne die Klammern würde `my $naturals = 1 ... Inf` nur `1` der Variablen zuweisen und dann die Sequenz eigenständig aufbauen — und das Auswerten einer endlosen Sequenz ohne Ergebnis würde das Programm zum Hängen bringen.

Es wird noch nichts berechnet. Die Sequenz gibt Werte erst heraus, wenn du danach fragst. Die Methode `head` nimmt die ersten paar:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Obwohl die Sequenz unendlich ist, werden nur die ersten fünf Zahlen generiert. Ohne Laziness würde ein Programm, das versucht, eine endlose Sequenz vollständig aufzubauen, niemals fertig werden.

Für eine endliche Sequenz nimmt die Methode `tail` stattdessen Werte vom Ende:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

Laziness ermöglicht es dir, die _Beschreibung_ einer Sequenz von der Entscheidung zu trennen, wie viel davon du verwenden möchtest.

{% include nav.html %}
