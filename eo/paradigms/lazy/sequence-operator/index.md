---
title: La sekvenca operatoro
translations_gpt:
---

{% include menu.html %}

La sekvenca operatoro `...` konstruas liston el komenca ŝablono ĝis fina valoro. Donu al ĝi la unuajn kelkajn elementojn kaj la finpunkton, kaj ĝi eltrovas, kiel la serio daŭras:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

El `2, 4` ĝi konkludas «aldonu du ĉiufoje» kaj daŭrigas ĝis ĝi atingas `10`. La paŝo povas esti ankaŭ malsupren:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Se la elementoj kreskas per multipliko anstataŭ per adicio, la operatoro rimarkas ankaŭ tion:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Ĉi tie ĉiu termo estas la duoblo de la antaŭa, do la sekvenco estas geometria.

Kiam la regulo estas pli kompleksa ol la operatoro povas diveni, vi povas provizi ĝin eksplicite kiel fermaĵon de la antaŭaj elementoj. Ekzemple, eksplicita regulo «aldonu la paŝon»:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

La bloko `* + 2` diras, kiel akiri la sekvan elementon el la kuranta. Per tio `...` povas esprimi ajnan sekvencon, kiun vi povas priskribi per regulo.

{% include nav.html %}
