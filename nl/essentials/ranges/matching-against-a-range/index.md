---
title: Vergelijken met een bereik
---

{% include menu.html %}

Neem een bereik en een variabele met een integer waarde erin:

```raku
my $r = 1..10;
my $v = 7;
```

Met behulp van de _smart-match operator_ `~~`, kun je controleren of de waarde binnen het bereik valt:

```
say $v ~~ $r;
```

In het getoonde voorbeeld is de conditie `True`, dus het programma print `True`.

{% include nav.html %}