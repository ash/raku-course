---
title: Set-operaties
translations_gpt:
---

{% include menu.html %}

Sets kunnen gecombineerd worden met de gebruikelijke bewerkingen uit de verzamelingenleer. Elke operator heeft een Unicode-symbool en een ASCII-notatie; je kunt gebruiken wat je voorkeur heeft.

De _vereniging_ `∪` (of `(|)`) verzamelt alle waarden die in een van beide sets zitten:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

De twee sets delen de waarde `3`, dus de vereniging heeft vijf unieke elementen: `1, 2, 3, 4, 5`.

De _doorsnede_ `∩` (of `(&)`) behoudt alleen de waarden die in beide sets zitten:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — merk op dat sets ongeordend zijn
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Hier bevat de doorsnede `2` en `3` — de waarden die in beide sets aanwezig zijn. Een set heeft geen vaste volgorde, dus de twee elementen kunnen in willekeurige volgorde verschijnen bij het afdrukken.

Het resultaat van deze bewerkingen is zelf ook een set, dus je kunt dezelfde vragen stellen: hoeveel elementen het bevat, en of een bepaalde waarde erin zit.

{% include nav.html %}
