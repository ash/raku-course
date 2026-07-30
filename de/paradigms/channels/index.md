---
title: Kanäle
translations_gpt:
---

{% include menu.html %}

Ein _Kanal_ ist eine threadsichere Warteschlange: Ein Teil eines Programms legt Werte hinein, ein anderer nimmt sie heraus, und Raku übernimmt für Sie das gesamte Sperren. Kanäle sind der übliche Weg, einen Strom von Werten sicher zwischen nebenläufigen Aufgaben weiterzureichen — einem Erzeuger und einem Verbraucher.

Dieser Abschnitt zeigt, wie man Werte über einen Kanal sendet und empfängt und wie das Schließen eines Kanals meldet, dass keine Werte mehr kommen.

{% include nav.html %}
