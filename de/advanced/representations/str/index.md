---
title: Die `.Str`-Methode
---

{% include menu.html %}

Die Methode `.Str` gibt die **einfache Stringform** eines Wertes zurück. Sie wird aufgerufen, wann immer ein Wert im *Stringkontext* verwendet wird: durch `print` und `put`, durch den Verkettungsoperator `~` und durch Stringinterpolation in doppelten Anführungszeichen.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Beachte, dass das Array **ohne Klammern** zurückkam, mit seinen Elementen einfach durch Leerzeichen verbunden — das ist der sichtbare Unterschied zu [`.gist`](../gist), das sie beibehält. Vergleiche die beiden nebeneinander:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Da die Interpolation `.Str` verwendet, wird ein Array innerhalb eines Strings auf die einfache Art dargestellt:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
