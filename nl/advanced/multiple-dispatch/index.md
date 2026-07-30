---
title: Meervoudige dispatch
---

{% include menu.html %}

In het onderdeel Essentials maakte je kennis met [_multi-functies_](/nl/essentials/more-on-functions/multi-functions): meerdere subroutines die dezelfde naam delen, waarbij Raku de juiste kiest door naar de typen van de argumenten te kijken. Dit mechanisme heet _multiple dispatch_.

Tot nu toe werd de keuze gemaakt op basis van het _type_ van de argumenten. Met een `where`-clausule kun je verder gaan en ook op de _waarde_ dispatchen. Deze wordt na een parameter geschreven en bevat een voorwaarde waaraan het argument moet voldoen om die kandidaat te kiezen:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Elke aanroep gaat naar de kandidaat wiens voorwaarde waar is voor de gegeven waarde:

```
-5 is negative
0 is zero
7 is positive
```

Alle drie de kandidaten hebben dezelfde signatuur wat typen betreft — een enkele `Int` — dus zonder de `where`-clausules zouden ze botsen. De voorwaarden maken ze onderscheidend.

## Een basisgeval voor recursie

Een veelvoorkomend gebruik van `where` is het bieden van het stopcriterium van een recursie als een aparte kandidaat. Hier is de faculteit opnieuw, opgesplitst in twee multi-subs:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

De eerste kandidaat behandelt het basisgeval (`$n` van `1` of minder) en geeft simpelweg `1` terug. Elke andere waarde gaat naar de tweede kandidaat, die `fact` opnieuw aanroept met een kleiner getal. Er is geen `if` in de functie — de keuze tussen basisgeval en recursieve stap wordt door de dispatcher gemaakt.

{% include nav.html %}
