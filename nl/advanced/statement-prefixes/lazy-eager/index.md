---
title: Luiheid en gretigheid
translations_gpt:
---

{% include menu.html %}

Sommige lijsten in Raku worden pas berekend wanneer hun elementen nodig zijn — ze zijn _lazy_. Met de prefixen `lazy` en `eager` kun je dit expliciet sturen.

Het prefix `eager` dwingt een lijst af om **in een keer**, onmiddellijk te worden geproduceerd:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Zonder `eager` zou de `map` de waarden nog steeds produceren, maar `eager` garandeert dat ze allemaal ter plekke worden berekend in plaats van op aanvraag.

Het prefix `lazy` doet het tegenovergestelde: het markeert een lijst als lazy, zodat de elementen pas worden geproduceerd wanneer ze worden opgevraagd. Dit maakt het mogelijk dat een lijst conceptueel oneindig is:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

De methode `.is-lazy` bevestigt dat de lijst niet zal proberen al haar (eindeloze) elementen vooraf te berekenen.

Dit specifieke voorbeeld is precies een geval waarin Raku sowieso luiheid zou aannemen: een onbegrensde range zoals `1 .. Inf` is al lazy, dus `say (1 .. Inf).is-lazy` print `True` zonder het prefix. Het schrijven van `lazy` hier verandert niets — het maakt alleen de bedoeling expliciet. Het prefix komt tot zijn recht wanneer je een lijst lazy wilt maken die anders gretig zou worden berekend.

Meestal kiest Raku zelf verstandig — ranges en reeksen zijn lazy, gewone array-toewijzing is eager. Gebruik deze prefixen wanneer je die keuze wilt overschrijven: `eager` om een dure berekening nu te forceren, `lazy` om er een uit te stellen die groot of onbegrensd zou kunnen zijn.

{% include nav.html %}
