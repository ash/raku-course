---
title: La kvantoro de nombro
translations_gpt:
---

{% include menu.html %}

Kiam vi bezonas ekzaktan nombron da ripetoj, aŭ intervalon, uzu la kvantoron `**` sekvatan de nombro:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` kongruas kun ekzakte kvar ciferoj sinsekve.

Intervalo kun du punktoj permesas variablan kalkulon. Ekzemple, `\d ** 2..3` kongruas kun du aŭ tri ciferoj — tiom, kiom disponeblas, ĝis tri:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

La ŝablono prenis tri ciferojn, ĉar tri estas la plejmulto, kiun ĝi rajtas en la intervalo `2..3`.

Vi ankaŭ povas lasi la supran finon malfermita. `\d ** 2..*` signifas «du aŭ pli da ciferoj», kaj `\d ** 1..*` signifas la samon kiel `\d+`.

La kvantoro `**` estas la ĝenerala formo; `*`, `+` kaj `?` estas nur oportunaj mallongigoj por la oftaj kazoj `0..*`, `1..*` kaj `0..1`.

{% include nav.html %}
