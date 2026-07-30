---
title: Promises
translations_gpt:
---

{% include menu.html %}

Een _promise_ staat voor een stuk werk dat op enig moment klaar zal zijn en een resultaat zal opleveren (of mislukken). Promises zijn de alledaagse manier op hoog niveau om in Raku aan concurrency te doen: je start werk, krijgt meteen een promise terug, en haalt het resultaat op wanneer je het nodig hebt.

Anders dan kale threads zijn promises makkelijk te combineren — je kunt op meerdere tegelijk wachten, of er een aan het resultaat van een andere rijgen. En waar een thread je alleen op de voltooiing van het werk laat *wachten*, overhandigt een promise afwachten je de **waarde** die zij opleverde — en werpt zij elke fout die zij tegenkwam opnieuw — zodat je zelden zelf resultaten via gedeelde variabelen hoeft rond te geven. Deze sectie behandelt promises starten, hun resultaten afwachten en ze samenvoegen.

{% include nav.html %}
