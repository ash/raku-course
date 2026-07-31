---
title: Ricorsione
translations_gpt:
---

{% include menu.html %}

Questa parte del corso va oltre la quotidianità e guarda tre stili potenti di programmazione che Raku sostiene particolarmente bene — _funzionale_, _concorrente_ e _reattivo_ — per poi metterli al lavoro nella costruzione di servizi web.

Cominciamo con la programmazione funzionale: uno stile costruito attorno a subroutine che prendono e restituiscono altre subroutine, valori calcolati solo quando servono ed espressioni invece che istruzioni passo passo. La prima idea è la _ricorsione_: una subroutine che chiama se stessa.

Una subroutine ricorsiva risolve un problema riducendolo a una versione più piccola dello stesso problema, finché il problema non diventa abbastanza piccolo da rispondere direttamente. Contare alla rovescia, percorrere un albero, calcolare un fattoriale: tutti sono naturalmente ricorsivi. Questa sezione mostra come scrivere una subroutine ricorsiva e, cosa altrettanto importante, come fermarla.

{% include nav.html %}
