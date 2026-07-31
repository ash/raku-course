---
title: La metaoperatoro de redukto
translations_gpt:
---

{% include menu.html %}

Envolvu ajnan infiksan operatoron en rektajn krampojn kaj ĝi fariĝas _redukto_: ĝi estas enmetata inter ĉiun elementon de listo, kunfaldante la liston al unu valoro.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` sumigas la liston kvazaŭ vi estus skribinta `1 + 2 + 3 + 4 + 5`; `[*]` multiplikas ĝin. La samo funkcias kun ajna infiksa operatoro:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` reduktas per la operatoro `max` por trovi la plej grandan elementon, kaj `[~]` reduktas per la ĉenkuniga operatoro `~` por glui la pecojn kune.

La redukta metaoperatoro funkcias sur ajna listo, inkluzive de intervalo:

```raku
say [+] 1..100; # 5050
```

Ĝi estas unu el la plej kompaktaj kaj esprimplenaj ecoj de Raku: tuta buklo da akumulado en paro da krampoj.

{% include nav.html %}
