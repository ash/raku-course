---
title: De reductiemeta-operator
translations_gpt:
---

{% include menu.html %}

Zet elke infixoperator tussen vierkante haken en hij wordt een _reductie_: hij wordt tussen elk element van een lijst ingevoegd en klapt de lijst tot één waarde in.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` telt de lijst op alsof je `1 + 2 + 3 + 4 + 5` geschreven had; `[*]` vermenigvuldigt haar. Hetzelfde werkt met elke infixoperator:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` reduceert met de operator `max` om het grootste element te vinden, en `[~]` reduceert met de stringplakoperator `~` om de stukken aan elkaar te plakken.

De reductiemeta-operator werkt op elke lijst, ook op een bereik:

```raku
say [+] 1..100; # 5050
```

Het is een van Raku's compactste en meest expressieve mogelijkheden: een hele lus aan accumulatie in een paar haken.

{% include nav.html %}
