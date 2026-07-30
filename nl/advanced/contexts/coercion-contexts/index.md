---
title: Numerieke, string- en Booleaanse context
translations_gpt: Numeric, string, and Boolean context
---

{% include menu.html %}

Drie veel voorkomende contexten vragen een waarde om zich te gedragen als een getal, een string of een Booleaanse waarde. Elk heeft een prefix-operator die dit expliciet afdwingt:

* `+` — numerieke context
* `~` — stringcontext
* `?` — Booleaanse context

Toegepast op een array geven ze respectievelijk de lengte, de elementen gescheiden door spaties, en of de array elementen bevat:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Een lege array is `0` in numerieke context en `False` in Booleaanse context:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

Je hoeft deze operatoren niet altijd handmatig te schrijven, want de taal kan de juiste context voor je opleggen. Rekenkundige bewerkingen plaatsen hun operanden in numerieke context, aaneenschakeling plaatst ze in stringcontext, en `if`, `while` en `and`/`or` plaatsen hun voorwaarde in Booleaanse context:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

Dus `if @array { … }` werkt precies zoals je zou hopen: een niet-lege array is waar. De prefix-operatoren zijn de expliciete manier om dezelfde conversies aan te vragen.

In combinatie met een postfix `if` maakt dit echt expressieve code mogelijk:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
