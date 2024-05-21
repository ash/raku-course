---
title: Abgleichen mit einem Bereich
---

{% include menu.html %}

Nehmen Sie einen Bereich und eine Variable mit einem ganzzahligen Wert darin:

```raku
my $r = 1..10;
my $v = 7;
```

Mit dem _Smart-Match-Operator_ `~~` können Sie überprüfen, ob der Wert innerhalb des Bereichs liegt:

```
say $v ~~ $r;
```

Im gezeigten Beispiel ist die Bedingung `True`, daher gibt das Programm `True` aus.

{% include nav.html %}