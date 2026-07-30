---
title: Bags und Mixes
---

{% include menu.html %}

Ein Set merkt sich nur, _ob_ ein Wert vorhanden ist. Manchmal moechtest du aber auch wissen, _wie oft_ er vorkommt. Dafür gibt es den `Bag`: Er speichert einen Zaehler für jeden Wert.

Du erstellst einen Bag mit der `bag`-Routine. Wiederholte Werte werden nicht zusammengefasst -- sie werden gezählt:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Wenn du den Bag mit dem `< >`-Subscript nach einem Wert fragst, erhaeltst du zurück, wie oft dieser Wert eingefuegt wurde. Die Methode `total` gibt die Summe aller Zaehler zurück:

```raku
say bag(<a b a c a>).total; # 5
```

Ein `Mix` ist dieselbe Idee wie ein Bag, nur dass die Zaehler (genannt _Gewichte_) auch Bruchzahlen sein können. Um explizite Gewichte zuzuweisen, ordne jedem Wert sein Gewicht als Paar zu und wandle die Liste mit `.Mix` um:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Das Nachschlagen eines Gewichts mit `< >` und das Summieren mit `total` funktionieren genau wie bei einem Bag -- nur müssen die Zahlen nicht ganzzahlig sein. Hier addiert `total` die Gewichte `2.5` und `0.75` und ergibt `3.25` -- es ist die Summe der Gewichte, nicht eine Anzahl der Werte. Bags und Mixes sind praktisch, wann immer du Mengen verfolgen musst -- zum Beispiel, um zu zählen, wie oft jedes Wort in einem Text vorkommt, oder um Optionen mit Gewichten zu versehen.

{% include nav.html %}
