---
title: Operator sequentiae
translations_gpt:
---

{% include menu.html %}

Operator sequentiae `...` indicem ab exemplari initiali usque ad valorem finalem aedificat. Da ei prima pauca elementa et finem, et quomodo series pergat excogitat:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

Ex `2, 4` colligit «adde duo singulis vicibus», et pergit donec `10` attingat. Gradus etiam deorsum ire potest:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Si elementa multiplicatione potius quam additione crescunt, operator id quoque animadvertit:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Hic unusquisque terminus duplex prioris est, itaque sequentia geometrica est.

Cum regula implicatior est quam ut operator eam divinare possit, illam expresse ut clausuram elementorum priorum praebere potes. Exempli gratia, expressa regula «adde gradum»:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

Blocus `* + 2` dicit quomodo elementum sequens ex currenti obtineas. Cum hoc `...` quamlibet sequentiam quam regula describere potes exprimere potest.

{% include nav.html %}
