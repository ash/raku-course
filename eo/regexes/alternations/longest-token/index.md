---
title: Plej longa ĵetono kaj unua kongruo
translations_gpt:
---

{% include menu.html %}

Kiam du alternativoj ambaŭ povus kongrui ĉe la sama loko, la operatoro `|` elektas tiun, kiu kongruas kun la **plej longa** peco de teksto. Tio nomiĝas _kongruigo laŭ plej longa ĵetono_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Kvankam `cat` estas skribita unue kaj kongruus, `|` preferas la pli longan `catdog`.

Foje vi volas la malon — provi la alternativojn en la ordo, en kiu vi skribis ilin, kaj preni la **unuan**, kiu kongruas. Tion faras la duobla streko `||`:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Nun `cat` estas provata unue kaj kongruas, do la motoro haltas tie kaj neniam konsideras `catdog`.

Uzu `|` (plej longa ĵetono), kiam vi volas la «plej bonan» kongruon sendepende de ordo — tio estas la kutima elekto, kaj tiu, sur kiu gramatikoj dependas. Uzu `||` (unua kongruo), kiam la ordo de la alternativoj estas signifa kaj vi volas, ke la pli fruaj venku.

{% include nav.html %}
