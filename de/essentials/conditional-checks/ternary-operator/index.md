---
title: Ternary operator
---

{% include menu.html %}

Der ternäre Operator in Raku ist eine zweiteilige Konstruktion `??` ... `!!`. Ein Boolescher Test wird von zwei Ausdrücken gefolgt, von denen einer je nach Ergebnis des Tests ausgeführt wird.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

Mit dem aktuellen Wert der Variablen `$shines` gibt dieses Programm `day` aus. Wenn Sie es in `Moon` ändern, wird das Ergebnis `night` sein.

Es ist möglich, ternäre Ausdrücke zu verketten. Stellen Sie nur sicher, dass es nicht zu kompliziert wird.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Hier wird je nach Wert in `$hours` eine andere Tageszeit gemeldet.

{% include nav.html %}