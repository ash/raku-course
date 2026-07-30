---
title: Träges gather
translations_gpt:
---

{% include menu.html %}

Ein `gather`-Block ist _träge_: Er läuft nicht auf einen Schlag. Er erzeugt Werte erst, wenn sie herausgeholt werden, was bedeutet, dass ein `gather` eine **endlose** Reihe beschreiben und dennoch brauchbar sein kann — Sie hören einfach auf, Werte zu nehmen, wenn Sie genug haben.

Der Haken ist, dass Sie das Ergebnis träge halten müssen. Es in einem gewöhnlichen `@array` abzulegen würde versuchen, jeden Wert auf einmal einzusammeln, und bei einer endlosen Reihe endet das nie. Legen Sie die Sequenz stattdessen in einem Skalar ab (wo sie eine träge `Seq` bleibt) und entnehmen Sie ihr eine Scheibe:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

Die `loop` endet nie, aber es werden nur fünf Werte erzeugt, denn mehr haben wir mit `[^5]` nicht verlangt. Sie können auch vorn mit `.head` entnehmen:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

Die Trägheit ist es, die `gather` unendliche Ströme sicher abbilden lässt: Nichts wird berechnet, bevor es gebraucht wird, und Sie nehmen genau so viel, wie Sie wollen.

{% include nav.html %}
