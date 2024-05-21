---
title: Quiz — Functies met standaardwaarden
---

{% include menu.html %}

Er is een functie:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Controleer welke van de volgende toewijzingen zullen werken.

{:.quiz}
1 | my $a = add(4, 6); | Toewijzen aan een ongetypeerde variabele werkt.
0 | my Rat $b = add(5, 6); | Een `Int` waarde kan niet worden toegewezen aan een `Rat` getypeerde variabele.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Expliciete typeconversie helpt.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}