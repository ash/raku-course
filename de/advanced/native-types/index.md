---
title: Native Typen
---

{% include menu.html %}

Die Typen, die du bisher verwendet hast — `Int`, `Num`, `Str` — sind vollwertige Raku-Objekte: flexibel, introspektierbar und beliebig groß. Raku bietet zusätzlich eine parallele Familie von _nativen_ Typen, die direkt auf die maschineneigene Darstellung abgebildet werden: `int`, `num`, `str` sowie eine Reihe von Ganzzahlen mit fester Größe.

Native Typen werden klein geschrieben. Sie tauschen Flexibilität gegen Geschwindigkeit und eine feste Größe ein und verhalten sich etwas anders als ihre geboxten Gegenstücke. Dieser Abschnitt zeigt, was sie sind und wie ihre feste Größe zu einem Überlauf führen kann.

{% include nav.html %}
