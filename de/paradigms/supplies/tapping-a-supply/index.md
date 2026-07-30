---
title: Ein Supply anzapfen
translations_gpt:
---

{% include menu.html %}

Um ein Supply zu abonnieren, _zapfen_ Sie es an: Sie geben `.tap` einen Block, und dieser Block läuft für jeden Wert, den das Supply aussendet. Am einfachsten experimentiert es sich mit `Supply.from-list`, das die Werte einer Liste aussendet:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Das gibt aus:

```
1
2
3
```

Der Block `-> $v { say $v }` ist die _Zapfstelle_. Das Supply schiebt jeden Wert der Reihe nach hinein, der Block läuft also dreimal, einmal je Wert.

Die Zapfstelle darf mit dem Wert alles tun, auch ein Ergebnis aufsummieren:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Hier wird jeder ausgesandte Wert zu `$total` addiert, das bei `6` endet. Das Anzapfen ist die Grundhandlung der reaktiven Programmierung: ein Stück Verhalten mit einem Strom verbinden und den Strom es antreiben lassen.

{% include nav.html %}
