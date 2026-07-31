---
title: De juiste kiezen
---

{% include menu.html %}

Voor alledaagse scalaire waarden zoals getallen en strings zien alle drie de representaties er hetzelfde uit. Ze beginnen te verschillen bij samengestelde of ongedefinieerde waarden. Hier is een `Pair` op drie manieren weergegeven:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Een grove vuistregel:

* [`.gist`](../gist) — voor uitvoer bedoeld om door een persoon *gelezen* te worden (`say`, `note`).
* [`.Str`](../str) — voor uitvoer die *platte tekst* is (`print`, `put`, interpolatie, de `~` operator).
* [`.raku`](../raku-method) — voor een *codeachtige* representatie bij het debuggen (`dd`).

Elk van deze methodes kan je eigen definitie krijgen wanneer je een klasse schrijft, zodat je eigen objecten ook netjes worden afgedrukt. Daar komen we op terug wanneer we [klassen maken](/nl/oop/classes) in het volgende deel.

{% include nav.html %}
