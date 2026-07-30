---
title: On-demand-Supplies
translations_gpt:
---

{% include menu.html %}

Ein _On-demand_-Supply erzeugt seine Werte für jede Zapfstelle neu. `Supply.from-list` ist on demand: Jede Zapfstelle erhält die **ganze** Folge von Anfang an, unabhängig von jeder anderen Zapfstelle.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Beide Zapfstellen haben alle drei Werte erhalten. Das Supply hat seine Werte bei der ersten Zapfstelle nicht „aufgebraucht“; es lief für die zweite schlicht erneut. Das ist das Verhalten, das Sie wollen, wenn ein Supply eine feste Quelle darstellt — eine Liste, eine Datei, eine Abfrage —, die jeder Abonnent vollständig sehen soll.

On demand ist der Standard für Supplies, die aus bestehenden Daten gebaut sind, denn jeder Verbraucher erwartet natürlicherweise die vollständige Folge. Die andere Art, ein _Live_-Supply, verhält sich recht anders, wie das nächste Thema zeigt.

{% include nav.html %}
