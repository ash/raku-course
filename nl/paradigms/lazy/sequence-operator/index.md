---
title: De reeksoperator
translations_gpt:
---

{% include menu.html %}

De reeksoperator `...` bouwt een lijst op vanaf een beginpatroon tot een eindwaarde. Geef hem de eerste paar elementen en het eindpunt, en hij werkt uit hoe de reeks doorloopt:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

Uit `2, 4` leidt hij "tel er telkens twee bij op" af, en hij gaat door tot hij `10` bereikt. De stap kan ook omlaag gaan:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Als de elementen door vermenigvuldiging in plaats van optelling groeien, merkt de operator dat ook:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Hier is elke term het dubbele van de vorige, dus de reeks is meetkundig.

Wanneer de regel ingewikkelder is dan de operator kan raden, kun je haar expliciet als closure van de vorige elementen leveren. Bijvoorbeeld een expliciete regel "tel de stap op":

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

Het blok `* + 2` zegt hoe je het volgende element uit het huidige krijgt. Daarmee kan `...` elke reeks uitdrukken die je met een regel kunt beschrijven.

{% include nav.html %}
