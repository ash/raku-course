---
title: Stella, plus et signum interrogationis
translations_gpt:
---

{% include menu.html %}

Tria signa casus frequentissimos tegunt. Unumquodque ad rem statim ante se pertinet:

* `*` — nulla vel plura
* `+` — unum vel plura
* `?` — nullum vel unum (optionale)

Signum plus seriem unius vel plurium characterum congruit:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Tot litteras `a` congruit quot potuit — tres.

Stella similis est plus sed etiam succedit cum nihil est quod congruat, quia nullae repetitiones permittuntur:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

Signum interrogationis partem optionalem reddit — congruit sive pars adest sive non:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Quantificatores ad id pertinent quod statim ante eos venit, etiam ad classem characterum. Exempli gratia, `\d+` seriem unius vel plurium cifrarum congruit — totum numerum:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
