---
title: Benannte Captures
translations_gpt:
---

{% include menu.html %}

Nummerierte Captures sind praktisch, aber wenn ein Muster wächst, sind Namen klarer als Nummern. Um einem Capture einen Namen zu geben, schreiben Sie `$<name>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

Die gecapturten Stücke sind nun über `$<name>` und `$<age>` namentlich erreichbar statt über `$0` und `$1`. Das ist dasselbe wie `$/<name>` zu schreiben, denn die Namen leben in der Match-Variablen `$/`.

Benannte Captures lassen ein Muster fast wie eine Beschreibung der Daten lesen:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Wie bei positionalen Captures ist jedes benannte Capture ein Match-Objekt, `$<age>.Str` liefert also den blanken Text und `$<age>.from` seine Position.

{% include nav.html %}
