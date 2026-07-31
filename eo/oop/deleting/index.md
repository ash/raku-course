---
title: Forigi dosierojn kaj dosierujojn
translations_gpt:
---

{% include menu.html %}

Same kiel `spurt` kaj `mkdir` kreas aferojn sur disko, du rutinoj forigas ilin.

La rutino `unlink` forigas dosieron:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` forigas la nomitan dosieron. Kiel la aliaj dosiersistemaj rutinoj, ĝi ankaŭ havas metodan formon sur vojobjekto — `'temp.txt'.IO.unlink`.

Forigo estas tuja kaj konstanta: ne estas rubujo, el kiu restaŭri. Notu, ke post kiam dosiero malaperis, vi devas testi ĝin per `.e` (ekzisto) anstataŭ `.f`, ĉar la tipaj testoj `.f` kaj `.d` ĵetas, kiam la vojo ne estas tie.

La rutino `rmdir` forigas dosierujon, sed nur **malplenan**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Se la dosierujo ankoraŭ enhavas ion, `rmdir` forigas nenion kaj lasas ĝin surloke. Do por forigi dosierujon, kiu tenas dosierojn, vi unue malplenigas ĝin kaj poste forigas ĝin:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # forigu ĉiun eron
rmdir 'reports';                # nun la dosierujo estas malplena
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` listigas la erojn de la dosierujo (la antaŭa temo traktis ĝin), kaj voki `.unlink` sur ĉiu forigas ilin. Post kiam la dosierujo estas malplena, `rmdir` povas forpreni ĝin. (Ĉi tiu plata buklo supozas, ke la dosierujo tenas nur dosierojn; arbo kun nestitaj subdosierujoj bezonus unue recursi en ilin.)

{% include nav.html %}
