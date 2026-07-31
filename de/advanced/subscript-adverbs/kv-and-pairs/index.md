---
title: Schlüssel, Werte und Paare
---

{% include menu.html %}

Andere Adverbien ändern, **was** eine Indizierung zurückgibt. Standardmäßig gibt eine Indizierung den Wert zurück; diese geben mehr zurück:

* `:v` — den Wert (Standard)
* `:k` — den Schlüssel (oder Index)
* `:kv` — sowohl den Schlüssel als auch den Wert
* `:p` — ein `Pair` aus Schlüssel und Wert

Bei einem Array ist der "Schlüssel" der Index:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` gibt den Index und den Wert zusammen als Liste zurück, und `@a[1]:p` gibt sie als Pair zurück.

Das Gleiche funktioniert bei Hashes, und es ist besonders praktisch bei einem Slice über mehrere Schlüssel auf einmal:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Hier kommt ein Zwei-Schlüssel-Slice als abwechselnde Schlüssel und Werte zurück. Diese Adverbien werden häufig von `map`, `for` und ähnlichen Konstrukten verwendet, wenn du Schlüssel und Werte nebeneinander verarbeiten möchtest, ohne die Arbeit in separate Abfragen aufzuteilen.

{% include nav.html %}
