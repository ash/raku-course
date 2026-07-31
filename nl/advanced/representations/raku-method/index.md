---
title: De `.raku`-methode
---

{% include menu.html %}

De derde representatiemethode, `.raku`, geeft een string terug met een **codeachtige** representatie van de waarde — idealiter een string die je terug in een programma zou kunnen plakken om dezelfde waarde opnieuw te creeren. Elke waarde in Raku heeft deze methode.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Merk op hoe de string `'Raku'` terugkomt met aanhalingstekens eromheen, zodat je in een oogopslag een getal van een string kunt onderscheiden — precies het soort detail dat je wilt bij het debuggen.

De methode werkt ook voor samengestelde gegevens, inclusief geneste structuren:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Omdat `.raku` een gewone string teruggeeft, kun je het overal gebruiken waar een string verwacht wordt, bijvoorbeeld in een geinterpoleerd bericht:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Gebruik `.raku` wanneer je die codeachtige representatie als string wilt om te combineren met je eigen berichten. Binnenkort introduceren we `dd`, een Rakudo-hulpmiddel dat dezelfde soort representatie in een stap voor je afdrukt.

{% include nav.html %}
