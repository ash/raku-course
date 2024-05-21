---
title: Meerdere MAIN-functies
---

{% include menu.html %}

Net als elke andere functie in Raku, kan de `MAIN` functie zijn `multi` varianten hebben. Dit stelt het programma in staat om individueel te reageren op een verschillend aantal of verschillende soorten invoerparameters.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

Dit programma verdubbelt zijn enige argument of voegt het toe aan het tweede argument als dat aanwezig is:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}