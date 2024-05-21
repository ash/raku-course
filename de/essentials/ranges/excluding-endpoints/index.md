---
title: Ausschließen der Endpunkte eines Bereichs
---

{% include menu.html %}

Um einen der Ränder oder beide auszuschließen, modifizieren Sie den Bereichserstellungsoperator mit dem `^`-Zeichen. Es gibt drei weitere Operatoren, die auf diese Weise konstruiert werden können. Die Kommentare listen die Zahlen auf, die die Bereiche erzeugen.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

In einfachen Fällen wie oben gezeigt, können Sie die Leerzeichen um den Bereichsoperator weglassen:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Für einen Bereich, der mit 0 beginnt, wie `0..^5`, gibt es eine Kurzschreibweise: `^5`.

{% include nav.html %}