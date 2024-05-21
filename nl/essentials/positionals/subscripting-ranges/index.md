---
title: Subscriptiebereiken
---

{% include menu.html %}

Een `Range` is een positioneel gegevenstype. Net als bij arrays kun je de individuele elementen ervan benaderen.

Bijvoorbeeld, zo druk je het derde element in de reeks van items die het bereik genereert af:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Het is belangrijk om te beseffen dat bereiken, in tegenstelling tot arrays, niet noodzakelijk alle waarden in het geheugen bewaren.

## Grootte

Om de grootte van het bereik te krijgen, gebruik je de `elems` methode zoals je dat bij arrays doet.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}