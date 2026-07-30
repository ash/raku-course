---
title: Zip-meta-operatoren
translations_gpt: Zip-meta-operatoren
---

{% include menu.html %}

De zip-meta-operator `Z` neemt twee (of meer) lijsten en koppelt hun elementen op positie:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

Het resultaat is een lijst van groepen: het eerste element van elke lijst samen, dan het tweede van elk, enzovoort.

Nog slimmer: je kunt `Z` combineren met een operator om op elk paar te werken. Bijvoorbeeld, `Z+` telt de elementen positie voor positie op:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Dit is de zip-meta-operator die de `+`-operator omhult: hij berekent `1 + 10`, `2 + 20` en `3 + 30`. Op dezelfde manier vermenigvuldigt `Z*` overeenkomstige elementen:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

En `Z~` voegt overeenkomstige tekenreeksen samen:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
