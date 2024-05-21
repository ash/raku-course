---
title: Quiz — Erstellen von Bereichen
---

{% include menu.html %}

Wählen Sie die Zeilen mit korrekter Raku-Syntax aus.

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
1 | ^ 50 | In Ordnung, sieht aber etwas seltsam aus.
0 | 60^ | Keine gültige Syntax.

## Kommentare

Alle Bereichserstellungsoperatoren (sowie andere Raku-Operatoren) sind ununterbrochene Zeichenfolgen, sodass Sie keinen Abstand zwischen ihren Teilen einfügen können.

{% include quiz.html %}

{% include nav.html %}