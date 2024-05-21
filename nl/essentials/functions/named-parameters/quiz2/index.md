---
title: Quiz — Variabelen als benoemde parameters
---

{% include menu.html %}

Hier is dezelfde functie als in de vorige quiz:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

Je hebt ook drie variabelen in het programma:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Markeer alle geldige manieren om de functie aan te roepen en twee van de drie variabelen door te geven.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Positionele argumenten worden hier doorgegeven in plaats van de benoemde.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Geen geldige Raku-syntaxis.
0 | f(:$b, :$c) | Geen benoemde parameter `c`.
0 | f(:$a, c => $c) | Geen benoemde parameter `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Zelfde als hierboven.
1 | f(:a($a), :b($c)) | Ook goed, hoewel een beetje overbodig.


{% include quiz.html %}

{% include nav.html %}