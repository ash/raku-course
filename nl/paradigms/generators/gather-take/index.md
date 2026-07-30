---
title: gather en take
translations_gpt:
---

{% include menu.html %}

Een `gather`-blok verzamelt waarden. Overal daarbinnen — ook in lussen en in subroutines die het aanroept — voegt een `take` een waarde toe aan de lijst die `gather` oplevert:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

De `take` draait één keer voor elk getal `1, 2, 3` en levert `1`, `4` en `9`. Het hele `gather`-blok evalueert naar de lijst met alles wat opgenomen is.

`take` mag onder elke besturingsstructuur staan, wat `gather` ideaal maakt om met voorwaarden een lijst op te bouwen:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Hier wordt een waarde alleen opgenomen wanneer de `if` slaagt, dus komen alleen de even getallen in de lijst terecht. Dat is vaak duidelijker dan de lijst met de hand met `push` opbouwen, omdat de logica als een gewone lus leest en `take` eenvoudigweg de te bewaren waarden markeert.

{% include nav.html %}
