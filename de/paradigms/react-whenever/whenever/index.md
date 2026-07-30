---
title: whenever
translations_gpt:
---

{% include menu.html %}

Ein einzelner `react`-Block kann **mehrere** `whenever`-Blöcke enthalten, von denen jeder ein anderes Supply beobachtet. Der Block reagiert auf dasjenige Supply, das als nächstes aussendet, und führt den zugehörigen Rumpf aus:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Beide Supplies werden zugleich beobachtet. Ihre Werte — `1, 2, 3` und `10, 20` — fließen alle in `$sum`, das bei `36` endet. Der `react`-Block ist erst fertig, wenn **beide** Supplies fertig sind.

Jedes `whenever` reagiert unabhängig, und so verbinden Sie Ströme: ein `whenever` je Quelle, alle im selben `react`. Ein echtes Programm könnte in einem `whenever` eine Netzverbindung beobachten und in einem anderen einen Zeitgeber und auf jedes Ereignis reagieren, sobald es eintrifft.

Innerhalb eines `whenever`-Rumpfes haben Sie den ausgesandten Wert (als `$_` oder als benannten Parameter) und können damit alles tun — Zustand ändern, an ein anderes Supply aussenden oder den react-Block mit `done` sogar vorzeitig schließen.

{% include nav.html %}
