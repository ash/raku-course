---
title: Arrays interpoleren
---

{% include menu.html %}

Om array-elementen te interpoleren in dubbel-quote strings, schrijf je het zoals je dat in een programma zelf doet: `@data[1]`. Om de hele array te interpoleren, voeg je een paar lege haakjes toe: `@data[]`. Het volgende programma illustreert deze aanpak:

```raku
my @data = 10, 20, 30;

say "Eerste: @data[0], laatste: @data[1]";
say "Alle elementen: @data[]";
```

Dit programma print de gevraagde gegevens:

```console
$ raku t.raku 
Eerste: 10, laatste: 20
Alle elementen: 10 20 30
```

{% include nav.html %}