---
title: Typen converteren met behulp van constructorvormen
---

{% include menu.html %}

Een vergelijkbare methode is om een nieuw exemplaar van een object van het vereiste type te construeren door de constructor aan te roepen, waarvan de naam de naam van het type is. Bijvoorbeeld:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Hier wordt de string die een drijvend-komma-getal bevat, omgezet naar een integer.

{% include nav.html %}