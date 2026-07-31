---
title: Asterisco, più e punto interrogativo
translations_gpt:
---

{% include menu.html %}

Tre simboli coprono i casi più comuni. Ciascuno si applica all'elemento che lo precede immediatamente:

* `*` — zero o più volte
* `+` — una o più volte
* `?` — zero o una volta (facoltativo)

Il segno più riconosce una sequenza di uno o più caratteri:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Ha riconosciuto quante più `a` poteva: tre.

L'asterisco è come il più, ma riesce anche quando non c'è nulla da riconoscere, perché sono ammesse zero ripetizioni:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

Il punto interrogativo rende un pezzo facoltativo: riconosce sia che il pezzo ci sia sia che non ci sia:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

I quantificatori si applicano a qualunque cosa li preceda immediatamente, classi di caratteri comprese. Per esempio `\d+` riconosce una sequenza di una o più cifre — un numero intero:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
