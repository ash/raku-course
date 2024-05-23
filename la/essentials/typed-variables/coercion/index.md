---
title: Conversio typorum pro variabilibus typatis
---

{% include menu.html %}

Vincula typorum satis stricta sunt. Exempli gratia, non potes valorem `Num`, etiam si integer integrum continet, variabili declaratae ut `Int` assignare:

```raku
my Int $x = 42;
# $x = 42e1; # Error
```

Utere [una ex methodis](/la/essentials/coercion/#topics-in-this-section) ad valorem convertendum.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}