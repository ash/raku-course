---
title: 'Solutio: Alacrem aestimationem cogere'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Inveni codicem fontem in archivo [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Exitus

```
True
False
True
```

## Commentarii

1. Intervallum usque ad `Inf` simul totum computari non potest, ergo pigrum est: `.is-lazy` refert `True`.

1. Praefixum `eager` indicem cogit statim produci, ergo resultatum non iam pigrum est — `.is-lazy` refert `False`. Hoc est directum contrarium indicis ut `lazy` signati.

1. Noli `eager` ad intervallum illimitatum applicare: `eager 1 .. Inf` conatur omne elementum simul computare, ergo programma simpliciter pendet, plus plusque memoriae consumens donec interficitur. `eager` tantum pro indicibus quos finitos esse scis tutum est.

1. Inversum quoque operatur: `lazy 1..3` etiam breve, finitum intervallum ut pigrum signat, ergo `.is-lazy` refert `True`. Praefixum signum pigritiae ponit cuiuscumque magnitudinis index sit — non debet infinitus esse ut piger sit.

{% include nav.html %}
