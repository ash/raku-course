---
title: Luie en oneindige reeksen
translations_gpt:
---

{% include menu.html %}

Een reeks hoeft niet al zijn waarden in één keer te berekenen. Raku-reeksen zijn _lui_ (lazy): elke waarde wordt pas geproduceerd wanneer deze daadwerkelijk nodig is. Hierdoor is het mogelijk om een reeks te beschrijven die helemaal geen einde heeft.

Om een oneindige reeks te schrijven, gebruik je `Inf` als eindpunt. Zet de reeks tussen haakjes, omdat `...` minder sterk bindt dan `=`:

```raku
my $naturals = (1 ... Inf);
```

Zonder de haakjes zou `my $naturals = 1 ... Inf` alleen `1` aan de variabele toewijzen en vervolgens de reeks apart opbouwen — en het evalueren van een eindeloze reeks zonder resultaat zou het programma laten vastlopen.

Er wordt nog niets berekend. De reeks levert alleen waarden wanneer je erom vraagt. De methode `head` neemt de eerste paar:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Hoewel de reeks oneindig is, worden alleen de eerste vijf getallen gegenereerd. Zonder luiheid zou een programma dat een eindeloze reeks probeert op te bouwen nooit klaar zijn.

Voor een eindige reeks neemt de methode `tail` juist waarden van het einde:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

Luiheid is wat je in staat stelt om de _beschrijving_ van een reeks te scheiden van de beslissing hoeveel ervan je wilt gebruiken.

{% include nav.html %}
