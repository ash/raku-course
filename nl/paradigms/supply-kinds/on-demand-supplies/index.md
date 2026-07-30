---
title: On-demand supplies
translations_gpt:
---

{% include menu.html %}

Een _on-demand_-supply produceert zijn waarden voor elke tap opnieuw. `Supply.from-list` is on-demand: elke tap krijgt de **hele** reeks vanaf het begin, onafhankelijk van elke andere tap.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Beide taps ontvingen alle drie de waarden. De supply heeft zijn waarden bij de eerste tap niet "opgebruikt"; hij draaide eenvoudigweg opnieuw voor de tweede. Dat is het gedrag dat je wilt wanneer een supply een vaste bron voorstelt — een lijst, een bestand, een query — die elke abonnee volledig zou moeten zien.

On-demand is de standaard voor supplies die uit bestaande gegevens gebouwd zijn, omdat elke consument van nature de volledige reeks verwacht. De andere soort, een _live_ supply, gedraagt zich heel anders, zoals het volgende onderwerp laat zien.

{% include nav.html %}
