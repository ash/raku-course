---
title: Parallelismus inordinatus per race
translations_gpt:
---

{% include menu.html %}

`.race` eodem modo ac `.hyper` parallelizat, una differentia: effectus ordine reddere **non** promittit. Quicumque operarius primus finit, effectum suum primus confert.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

Quadrata ordine imprevisibili redeunt, itaque `.sort` ibi est ut exitus determinatus sit. Si sine ordinando impressissemus, numeri omnes adessent sed fortasse permixti.

Quia effectus ordinatos servare non debet, `.race` paulo minus oneris quam `.hyper` habere potest. Permutatio simplex est:

* utere `.hyper` cum **ordo** effectuum refert;
* utere `.race` cum **non** refert — exempli gratia cum effectus summaturus, numeraturus vel aliter modo ab ordine independenti compositurus es.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Summare ab ordine independens est, itaque `.race` hic optio bona est et idem `10100` dat. Utraque methodus circa eandem ideam versatur — opus independens simul currere sinere — et inter eas eligis secundum hoc utrum ordo tibi curae sit.

{% include nav.html %}
