---
title: Der Mal-Quantor
translations_gpt:
---

{% include menu.html %}

Wenn Sie eine genaue Anzahl von Wiederholungen brauchen oder einen Bereich, verwenden Sie den Quantor `**` gefolgt von einer Zahl:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` trifft genau vier Ziffern in Folge.

Ein Bereich mit zwei Punkten erlaubt eine veränderliche Anzahl. So trifft `\d ** 2..3` zwei oder drei Ziffern — so viele, wie vorhanden sind, höchstens drei:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

Das Muster hat drei Ziffern genommen, weil drei das Höchste ist, was der Bereich `2..3` erlaubt.

Sie können das obere Ende auch offen lassen. `\d ** 2..*` bedeutet „zwei oder mehr Ziffern“, und `\d ** 1..*` bedeutet dasselbe wie `\d+`.

Der Quantor `**` ist die allgemeine Form; `*`, `+` und `?` sind lediglich bequeme Abkürzungen für die häufigen Fälle `0..*`, `1..*` und `0..1`.

{% include nav.html %}
