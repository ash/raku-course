---
title: Arrays
---

{% include menu.html %}

Ein Array ist ein geordneter Container, dessen Elemente selbst Skalar-Container sind.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

Das Sigil `@` zeigt an, dass sich eine solche Variable als `Positional`-Objekt verhält, sodass du sie indizieren kannst, um auf einzelne Elemente zuzugreifen:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Da jedes Element ein Skalar-Container ist, kannst du ihm einen neuen Wert zuweisen, genau wie bei einer eigenständigen Skalarvariable:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

Du kannst auch einen Wert eines anderen Typs zuweisen, zum Beispiel:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Das ist es, was Arrays _veränderbar_ macht: Jeder Platz ist ein Container, der einen neuen Wert empfangen kann. Wie du im nächsten Thema sehen wirst, verhalten sich [Listen](/de/advanced/ordered-containers/lists) anders.

{% include nav.html %}
