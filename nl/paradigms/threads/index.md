---
title: Threads
translations_gpt:
---

{% include menu.html %}

Een _thread_ is een onafhankelijke uitvoeringslijn die naast de rest van je programma loopt. Een thread starten laat een stuk werk op de achtergrond gebeuren terwijl het hoofdprogramma doorgaat.

Threads zijn het gereedschap voor concurrency op het laagste niveau in Raku. In alledaagse code grijp je meestal naar de [_promises_](/nl/paradigms/promises) van de volgende sectie, die bovenop threads gebouwd zijn maar veel makkelijker te combineren. Toch is het de moeite waard het basismechanisme te zien: hoe je een thread start en hoe je erop wacht.

{% include nav.html %}
