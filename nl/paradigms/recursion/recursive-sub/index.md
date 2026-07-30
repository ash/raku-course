---
title: Een recursieve subroutine
translations_gpt:
---

{% include menu.html %}

Een _recursieve_ subroutine is er een die zichzelf aanroept. Het klassieke voorbeeld is de faculteit: de faculteit van `n` is `n` maal de faculteit van `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Lees de body als twee gevallen die door de ternaire operator `?? !!` verbonden zijn:

* wanneer `$n` `1` of minder is, is het antwoord eenvoudigweg `1`;
* anders is het antwoord `$n` maal `fact($n - 1)` — dezelfde subroutine aangeroepen met een kleiner getal.

Elke aanroep pelt één factor af en vraagt om een kleinere faculteit, tot het getal `1` bereikt en de aanroepen zich afwikkelen: `fact(5)` is `5 * fact(4)`, wat `5 * 4 * fact(3)` is, en zo verder omlaag tot `1`.

Recursie drukt veel problemen heel rechtstreeks uit. Zodra een taak beschreven kan worden in termen van een kleinere versie van zichzelf, is een recursieve subroutine vaak de natuurlijkste manier om haar te schrijven.

{% include nav.html %}
