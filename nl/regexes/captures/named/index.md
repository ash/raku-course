---
title: Benoemde captures
translations_gpt:
---

{% include menu.html %}

Genummerde captures zijn handig, maar wanneer een patroon groeit zijn namen duidelijker dan nummers. Om een capture een naam te geven, schrijf je `$<naam>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

De gecapturde stukken zijn nu op naam bereikbaar via `$<name>` en `$<age>` in plaats van `$0` en `$1`. Dit is hetzelfde als `$/<name>` schrijven, omdat de namen binnen de matchvariabele `$/` leven.

Benoemde captures laten een patroon bijna als een beschrijving van de gegevens lezen:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Net als bij positionele captures is elke benoemde capture een matchobject, dus `$<age>.Str` geeft de kale tekst en `$<age>.from` geeft de positie ervan.

{% include nav.html %}
