---
title: Het basisgeval
translations_gpt:
---

{% include menu.html %}

Elke recursieve subroutine heeft een _basisgeval_ nodig: een voorwaarde waaronder ze een antwoord teruggeeft **zonder** zichzelf opnieuw aan te roepen. Zonder dat zou de subroutine zichzelf eeuwig aanroepen.

Bij de faculteit was het basisgeval "`$n` is `1` of minder". Hier is nog een voorbeeld, dat naar nul aftelt:

```raku
sub countdown($n) {
    return if $n < 1;   # base case: stop
    say $n;
    countdown($n - 1);  # recursive step
}

countdown(3);
```

Het programma drukt af:

```
3
2
1
```

De eerste regel is het basisgeval: wanneer `$n` onder `1` zakt, keert de subroutine onmiddellijk terug en eindigt de keten van aanroepen. De recursieve stap beweegt altijd **naar** het basisgeval toe door `countdown` met een kleiner getal aan te roepen.

Als je het basisgeval vergeet, of de stappen bereiken het nooit, stopt de recursie nooit en mislukt het programma uiteindelijk. Een correcte recursieve subroutine heeft altijd twee dingen: een basisgeval dat de recursie beëindigt, en een stap die elke aanroep er dichterbij brengt.

{% include nav.html %}
