---
title: Der Reduktions-Metaoperator
translations_gpt:
---

{% include menu.html %}

Setzen Sie einen beliebigen Infixoperator in eckige Klammern, und er wird zu einer _Reduktion_: Er wird zwischen jedes Element einer Liste gesetzt und klappt die Liste zu einem Wert zusammen.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` summiert die Liste, als hätten Sie `1 + 2 + 3 + 4 + 5` geschrieben; `[*]` multipliziert sie. Dasselbe funktioniert mit jedem Infixoperator:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` reduziert mit dem Operator `max`, um das größte Element zu finden, und `[~]` reduziert mit dem Verkettungsoperator `~`, um die Stücke zusammenzufügen.

Der Reduktions-Metaoperator arbeitet auf jeder Liste, auch auf einem Bereich:

```raku
say [+] 1..100; # 5050
```

Er ist eine von Rakus knappsten und ausdrucksstärksten Möglichkeiten: eine ganze Schleife voller Aufsummierung in einem Klammerpaar.

{% include nav.html %}
