---
title: Quiz — Ranges maken
---

{% include menu.html %}

Selecteer de regels met correcte Raku-syntaxis.

{:.quiz}
1 | 1..10
1 | 1 .. 10
1 | -1..20
0 | -1 . . 20
1 | 6^..10
0 | 7^.. ^10
1 | 10..^20
1 | 30^..^30
0 | 30 ^ .. ^ 30
1 | 30 ^..^ 30
1 | ^40
1 | ^ 50 | Goed, maar ziet er een beetje vreemd uit.
0 | 60^ | Geen geldige syntaxis.

## Opmerkingen

Alle bereikcreatie-operatoren (evenals andere Raku-operatoren) zijn ononderbroken reeksen van tekens, dus je kunt geen spatie tussen hun delen invoegen.

{% include quiz.html %}

{% include nav.html %}