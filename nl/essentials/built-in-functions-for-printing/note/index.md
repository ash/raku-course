---
title: De note routine
---

{% include menu.html %}

De `note` routine print zijn argumenten naar de standaard foutstroom. Verder is het vergelijkbaar met [`say`](../say).

1. Roept de `gist` methode aan op zijn argumenten.
1. Voegt een nieuwe regelkarakter toe.
1. Converteert het resultaat naar UTF-8.
1. Stuurt het naar de `STDERR` stroom.

```raku
my $x = 42;
note "Huidige waarde van \$x is $x";
```

Bevestig dat dit programma het bericht niet naar `STDOUT` stuurt:

```
$ raku t.raku > /dev/null
Huidige waarde van $x is 42
```

Als er geen argument aan `note` wordt doorgegeven, print het `Noted` als standaardbericht.

{% include nav.html %}