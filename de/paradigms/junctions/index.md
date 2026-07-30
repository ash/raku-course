---
title: Junctions
translations_gpt:
---

{% include menu.html %}

Dieser Unterteil wendet sich der _nebenläufigen_ Programmierung zu — mehr als eine Sache zugleich zu tun. Raku hat dafür eine reiche, freundliche Werkzeugkiste: Junctions, Threads, Promises und Kanäle. Wir beginnen mit der sanftesten davon, der _Junction_.

Eine Junction ist ein einzelner Wert, der **mehrere** Werte zugleich enthält, verbunden durch eine logische Beziehung: _irgendeiner_ von ihnen, _alle_ von ihnen, _einer_ von ihnen oder _keiner_ von ihnen. Wenn Sie eine Junction in einem Vergleich verwenden, prüft Raku jeden Wert dahinter und fasst die Ergebnisse zusammen. Das ersetzt oft eine ganze Schleife durch einen einzigen Ausdruck — und unter der Haube können die Prüfungen nebenläufig laufen.

In den frühen Tagen der Sprache liefen Junctions unter einem anderen Namen: _Quantensuperpositionen_ — ein Wink darauf, wie ein Wert viele Möglichkeiten zugleich enthalten kann, ganz wie ein Teilchen in der Quantenphysik.

{% include nav.html %}
