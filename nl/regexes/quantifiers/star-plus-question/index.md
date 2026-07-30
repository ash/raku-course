---
title: Ster, plus en vraagteken
translations_gpt:
---

{% include menu.html %}

Drie symbolen dekken de meest voorkomende gevallen. Elk ervan hoort bij het item er direct voor:

* `*` — nul of meer keer
* `+` — een of meer keer
* `?` — nul of een keer (optioneel)

Het plusteken matcht een reeks van een of meer tekens:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Het matchte zoveel `a`'s als het kon — drie stuks.

De ster lijkt op de plus maar slaagt ook wanneer er niets te matchen valt, omdat nul herhalingen toegestaan zijn:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

Het vraagteken maakt een stuk optioneel — het matcht of het stuk er nu wel of niet is:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Kwantoren horen bij wat er onmiddellijk voor komt, inclusief een tekenklasse. Zo matcht `\d+` een reeks van een of meer cijfers — een heel getal:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
