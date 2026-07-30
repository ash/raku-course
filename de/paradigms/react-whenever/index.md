---
title: react und whenever
translations_gpt:
---

{% include menu.html %}

Ein einzelnes Supply anzuzapfen ist gut, doch echte reaktive Programme beobachten oft **mehrere** Ströme zugleich und reagieren auf denjenigen, der als nächster einen Wert liefert. Raku hat dafür eine eigene Schreibweise: den `react`-Block mit einem oder mehreren `whenever`-Blöcken darin.

Ein `react`-Block richtet die Reaktionen ein und wartet dann, wobei er jeden `whenever`-Rumpf ausführt, sobald sein Supply etwas aussendet — bis alle Supplies fertig sind. Dieser Abschnitt zeigt, wie die beiden zusammenwirken.

{% include nav.html %}
