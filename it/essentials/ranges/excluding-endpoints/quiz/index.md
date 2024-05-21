---
title: Quiz — Creare intervalli
---

{% include menu.html %}

Seleziona le righe con la sintassi corretta in Raku.

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
1 | ^ 50 | Va bene, ma sembra un po' strano.
0 | 60^ | Sintassi non valida.

## Commenti

Tutti gli operatori di creazione degli intervalli (così come altri operatori di Raku) sono sequenze ininterrotte di caratteri, quindi non è possibile inserire uno spazio tra le loro parti.

{% include quiz.html %}

{% include nav.html %}