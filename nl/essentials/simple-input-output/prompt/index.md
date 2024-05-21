---
title: Input met prompt
---

{% include menu.html %}

Het tegenovergestelde van `say` is `prompt`. Het wacht tot de gebruiker iets invoert en op Enter drukt. Vervolgens stuurt het de invoer als een string naar het programma. Je kunt het resultaat van `prompt` nemen en doorgeven aan `say`. In dit geval echo je wat de gebruiker typt. Laten we zo'n programma maken:

```raku
say prompt;
```

Als je dit programma uitvoert, kun je in de war raken omdat het programma in een toestand komt waarin het alleen wacht op invoer. Om het programma gebruiksvriendelijker te maken, is het goed om het promptbericht af te drukken. Je hoeft geen aparte `say` toe te voegen, omdat je het bericht kunt doorgeven aan `prompt`:

```raku
prompt 'Welke taal ga je leren? '
```

Voordat we deze sectie afsluiten, laten we alle onderdelen combineren en een programma maken dat vraagt naar de wensen van de gebruiker en vervolgens een zin afdrukt met de tekst die de gebruiker heeft ingevoerd.

```raku
say 'Je gaat ', prompt 'Welke taal ga je leren? ', ' leren';
```

Als je `Raku` invoert, krijg je de volgende zin afgedrukt:

    Je gaat Raku leren

Oké, we kunnen nu met het programma praten, en we kunnen het programma met ons laten praten!

Merk op dat omdat `say` de strings moet kennen voordat ze worden afgedrukt, Raku eerst `prompt` zal uitvoeren, zodat de dialoog in de juiste volgorde verloopt:

```console
$ raku t.raku 
Welke taal ga je leren? Raku
Je gaat Raku leren
```

{% include nav.html %}