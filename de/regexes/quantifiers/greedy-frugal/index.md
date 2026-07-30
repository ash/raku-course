---
title: Gieriges und sparsames Treffen
translations_gpt:
---

{% include menu.html %}

Standardmäßig ist ein Quantor _gierig_: Er trifft so viel, wie er nur kann, ohne dass der Rest des Musters scheitert. Betrachten Sie einen Treffer vom ersten `<` bis zu einem `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

Das `.+` hat so viel verschlungen, wie es konnte, bis zum **letzten** `>`, der Treffer erstreckt sich also über beide Klammerpaare.

Um einen Quantor _sparsam_ zu machen (auch _faul_ oder _nicht gierig_ genannt), setzen Sie ein `?` dahinter. Ein sparsamer Quantor trifft **so wenig** wie möglich:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Jetzt hält `.+?` beim **ersten** `>` an, es wird also nur das erste Klammerstück getroffen.

Das nachgestellte `?` funktioniert bei jedem Quantor: `*?` und `**?` sind ebenfalls sparsam. Gierige und sparsame Fassungen treffen dieselben Arten von Text — sie unterscheiden sich nur darin, wie viel sie nehmen, wenn es eine Wahl gibt.

{% include nav.html %}
