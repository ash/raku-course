---
title: Oplossing voor ‘Som van getallen van 1 tot 100’
---

{% include menu.html %}

Om een som van gehele getallen van 1 tot 100 te berekenen, is het natuurlijk mogelijk om al die getallen in één lange uitdrukking op te tellen. Of een lus te maken (we zullen lussen in de volgende secties behandelen). Maar de beste oplossing is om een bekende [formule](https://nl.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯) te gebruiken:

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

Met de formule wordt de oplossing vrij triviaal.

## Code

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "De som van de getallen van 1 tot $N is $sum.";
```

🦋 Je kunt de volledige code vinden in het bestand [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum1-100.raku).

## Uitvoer

```console
$ raku exercises/numbers/sum1-100.raku 
De som van de getallen van 1 tot 100 is 5050.
```

{% include nav.html %}