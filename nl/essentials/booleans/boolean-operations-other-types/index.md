---
title: Booleaanse operaties met andere typen
---

{% include menu.html %}

In de volgende sectie zullen we het hebben over het converteren van gegevens van verschillende typen naar elkaar. Maar daarvoor is het belangrijk om de volgende eigenschap van Raku te benadrukken. Wanneer je Booleaanse operaties toepast op strings of gehele getallen, worden de waarden niet omgezet naar Booleans, en het resultaat is ook geen Booleaanse waarde. Bekijk de volgende voorbeelden:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Laten we de regels lezen 📖 [uit de documentatie](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` retourneert het eerste argument dat in Booleaanse context als False wordt geëvalueerd, anders retourneert het het laatste argument.
* `||` retourneert het eerste argument dat in Booleaanse context als True wordt geëvalueerd, anders retourneert het het laatste argument.
* `^^` retourneert het True-argument als er één (en slechts één) is. Retourneert het laatste argument als alle argumenten False zijn. Retourneert `Nil` wanneer meer dan één argument waar is.

Merk op dat we zojuist een ‘null’-waarde `Nil` zijn tegengekomen.

{% include nav.html %}