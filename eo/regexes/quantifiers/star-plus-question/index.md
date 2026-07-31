---
title: Steleto, plus kaj demandosigno
translations_gpt:
---

{% include menu.html %}

Tri simboloj kovras la plej oftajn kazojn. Ĉiu el ili aplikiĝas al la ero tuj antaŭ ĝi:

* `*` — nul aŭ pli da fojoj
* `+` — unu aŭ pli da fojoj
* `?` — nul aŭ unu fojo (nedeviga)

La plussigno kongruas kun serio de unu aŭ pli da signoj:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Ĝi kongruis kun tiom da `a`-oj, kiom ĝi povis — tri el ili.

La steleto similas al la pluso sed ankaŭ sukcesas, kiam estas nenio por kongrui, ĉar nul ripetoj estas permesitaj:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

La demandosigno faras pecon nedeviga — ĝi kongruas ĉu la peco ĉeestas aŭ ne:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Kvantoroj aplikiĝas al kio ajn venas tuj antaŭ ili, inkluzive de signoklaso. Ekzemple, `\d+` kongruas kun serio de unu aŭ pli da ciferoj — tuta nombro:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
