---
title: "Lambda's"
translations_gpt:
---

{% include menu.html %}

Een _lambda_ is een functie zonder naam. Je bent al twee manieren tegengekomen om er een te schrijven. De eerste is het **[pointy block](/nl/advanced/anonymous-subroutines)**, dat zijn parameters achter de pijl `->` opsomt:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

De tweede is de **[Whatever](/nl/advanced/whatever)**-vorm, waarin een `*` voor het argument staat en de uitdrukking eromheen een functie met één argument wordt:

```raku
my &square = * ** 2;
say square(7); # 49
```

Beide maken hetzelfde soort ding: een stuk code dat je kunt bewaren, doorgeven en aanroepen. Lambda's komen het best tot hun recht als argumenten voor hogere-ordefuncties, waar ze een naam geven alleen maar in de weg zou zitten:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

De pointy vorm is duidelijker wanneer de body langer is of meerdere parameters heeft; de Whatever-vorm is heerlijk kort voor eenvoudige uitdrukkingen. Het zijn twee schrijfwijzen van hetzelfde idee: een functie zonder naam.

{% include nav.html %}
