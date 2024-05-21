---
title: Quiz — Variablen als benannte Parameter
---

{% include menu.html %}

Hier ist die gleiche Funktion wie im vorherigen Quiz:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

Du hast auch drei Variablen im Programm:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Markiere alle gültigen Wege, die Funktion aufzurufen und zwei der drei Variablen zu übergeben.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Positionsargumente werden hier anstelle der benannten übergeben.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Keine gültige Raku-Syntax.
0 | f(:$b, :$c) | Kein benannter Parameter `c`.
0 | f(:$a, c => $c) | Kein benannter Parameter `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Dasselbe wie oben.
1 | f(:a($a), :b($c)) | Auch in Ordnung, wenn auch etwas redundant.


{% include quiz.html %}

{% include nav.html %}