---
title: 'Oplossing: Zeef van Eratosthenes'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Je kunt de broncode vinden in het bestand [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Uitvoer

```
(2 3 5 7 11 13 17 19 23 29)
```

## Opmerkingen

1. In plaats van een lijst vlaggen onthoudt `%composite` welke getallen weggestreept
zijn. Een getal dat er nog niet in staat wanneer het aan de beurt komt, is priem.

1. Voor elke priem `$i` worden zijn veelvouden gegenereerd als de reeks
`$i², $i² + $i ... $limit` en als samengesteld gemarkeerd. Bij `$i²` beginnen slaat
veelvouden over die al door kleinere priemen afgehandeld zijn.

1. Dit is één enkele [reeks](/nl/paradigms/lazy/sequence-operator), geen `for`-kop in
C-stijl. De operator `...` neemt de eerste twee waarden, werkt de stap
ertussen uit, en gaat door tot de limiet. Voor `$i` = `3` betekent dat beginnen
bij `9`, dan `12`, dus de stap is `3`, en de lus loopt de hele lijst af:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    Dus `for` krijgt één lijst om over te itereren — `9, 12, 15, …` — in plaats van drie
aparte clausules.

1. `$i²` kwadrateert het getal met een Unicode-superscript. Raku aanvaardt alle drie
`$i * $i`, `$i ** 2` en `$i²` — ze berekenen precies dezelfde waarde, dus kies
wat voor jou het beste leest. De superscriptcijfers (`²`, `³`, …) zijn gewone
tekens die je rechtstreeks in de broncode kunt typen of plakken.

{% include nav.html %}
