---
title: Globaal matchen
translations_gpt:
---

{% include menu.html %}

Standaard vindt een regex alleen de **eerste** match. Het bijwoord `:g` (kort voor `:global`) vindt **elke** match in de string. Het wordt op de operator `m///` geschreven:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Met `:g` gedraagt het resultaat zich als een lijst matchobjecten — een voor elke plek waar het patroon gevonden is. Je kunt ze tellen, erover lussen, of er elk een string van maken:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Hier matchte `\d+` drie afzonderlijke reeksen cijfers, en `:g` verzamelde ze allemaal.

Globaal matchen is het natuurlijke gereedschap zodra de vraag "hoeveel …" of "alle …" luidt in plaats van "is er een …".

{% include nav.html %}
