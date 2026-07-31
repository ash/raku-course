---
title: Sekvencoj
translations_gpt:
---

{% include menu.html %}

_Sekvenco_ estas ordigita serio de valoroj produktataj unu post la alia. Raku konstruas sekvencojn per la operatoro `...`, kiu eltrovas la ŝablonon el la valoroj, kiujn vi donas al ĝi, kaj generas la ceteron ĝis fina punkto.

La plej simpla kazo nombras de unu valoro al alia:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Se vi donas du komencajn valorojn, Raku prenas la paŝon inter ili kaj daŭrigas per la sama paŝo. Tiel vi faras aritmetikan sekvencon:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Ĉi tie la komencaj valoroj `1, 3` starigas la paŝon al du, do Raku nombras po du kaj haltas, kiam ĝi atingas `11`.

La valoro produktata de `...` estas de la tipo `Seq`:

```raku
say (1 ... 5).WHAT; # (Seq)
```

La sekvaj temoj montras aliajn ŝablonojn, kiujn la operatoro `...` povas rekoni, kaj kiel sekvenco povas esti maldiligenta — eĉ senlima.

{% include nav.html %}
