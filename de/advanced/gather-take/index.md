---
title: '`gather` und `take`'
---

{% include menu.html %}

Das Paar `gather` und `take` ist eine flexible Möglichkeit, eine Liste aufzubauen. Du umschließt Code mit einem `gather`-Block, und jedes Mal, wenn dieser Code `take` aufruft, wird der Wert zur Liste hinzugefügt, die `gather` erzeugt.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

Die drei `take`-Aufrufe liefern drei Werte, und `gather` sammelt sie in der Liste, die in `@result` gespeichert wird.

Die eigentliche Stärke dieses Paares zeigt sich, wenn die `take`-Aufrufe über gewöhnlichen Kontrollfluss verteilt sind, wie zum Beispiel eine Schleife mit einer Bedingung. Die Liste enthält dann nur die Werte, die du bewusst genommen hast:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Hier läuft die Schleife über die Zahlen von 1 bis 10, aber nur die geraden werden genommen, sodass `@evens` am Ende `2, 4, 6, 8, 10` enthält. (Der Operator `%%` prüft, ob eine Zahl ganzzahlig teilbar ist.)

Diese Trennung macht `gather`/`take` so praktisch: Der umgebende Code entscheidet, _wann_ ein Wert erzeugt wird, und `gather` sammelt stillschweigend alles, was genommen wurde.

{% include nav.html %}
