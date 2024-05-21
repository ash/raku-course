---
title: Introspektion mit `WHAT`
---

{% include menu.html %}

Es ist möglich, den Datentyp einer Variablen zu sehen, indem man die Methode `WHAT` aufruft:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

Der Typ wird in Klammern ausgegeben, wie in den Kommentaren gezeigt. Zum Beispiel `(Int)` oder `(Str)`.

Es gibt kein Problem, eine Methode direkt auf einem Literal aufzurufen. Zum Beispiel:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Beachten Sie, dass wir im Fall von `-1` die Zahl in Klammern setzen, da `say -1.WHAT` versuchen würde, das Ergebnis von `1.WHAT` zu negieren, was zu einer Ausnahme führt.

{% include nav.html %}