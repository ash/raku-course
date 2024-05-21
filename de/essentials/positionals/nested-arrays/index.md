---
title: Verschachtelte Arrays
---

{% include menu.html %}

Arrays können beliebige andere Daten enthalten, einschließlich anderer Arrays. Um die Grenzen der verschachtelten Arrays zu kennzeichnen, verwenden Sie eckige Klammern:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

Es ist auch möglich, ein weiteres Paar Klammern für das oberste Array hinzuzufügen. Das nächste Beispiel zeigt dieselbe Datenstruktur wie zuvor.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Um auf innere Elemente zuzugreifen, fügen Sie so viele Indizes hinzu, wie benötigt werden. Ein einzelnes Paar eckiger Klammern geht eine Ebene tiefer in die Struktur:

```raku
say @table[0][3]; # Gibt 4 aus
say @table[2][1]; # Gibt 200 aus
```


{% include nav.html %}