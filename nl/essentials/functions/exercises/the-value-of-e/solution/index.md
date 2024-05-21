---
title: 'Oplossing: De waarde van e'
---

{% include menu.html %}

## Disclaimer

In Raku is er een ingebouwde constante `e` die het directe antwoord op de taak geeft. De onderstaande oplossing is bedoeld voor educatieve doeleinden.

## Code

De formule in deze taak bevat een faculteit, en we hebben al minstens twee oplossingen om deze te berekenen (meer volgen nog). Het onderstaande programma definieert twee functies: één om de faculteit te berekenen, en een andere voor de partiële som volgens de formule.

Aangezien het vereist is dat de functie zonder argumenten kan worden aangeroepen, in welk geval deze een vooraf bepaald aantal iteraties uitvoert, kunnen we een [standaardwaarde](/nl/essentials/functions/default-values) van de parameter toevoegen: `sub e-approx($max = 100)`.

In de code, let op de overeenkomsten in hoe de resultaatwaarden worden geaccumuleerd in een [postfix `for`-lus](/nl/essentials/loops/postfix-for) over een [bereik](/nl/essentials/ranges).

Hier is de oplossing:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Vind het programma in het bestand [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Uitvoer

Met 10 en 100 iteraties krijgen we de volgende resultaten. Probeer daarnaast andere waarden van `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}