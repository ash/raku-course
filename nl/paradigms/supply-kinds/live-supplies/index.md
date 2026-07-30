---
title: Live supplies
translations_gpt:
---

{% include menu.html %}

Een _live_ supply zendt waarden zodra ze optreden uit naar de taps die **op dat moment** luisteren. Je maakt er een met een `Supplier`: de supplier is de verzendkant, en zijn `.Supply` is de ontvangstkant die anderen aftappen.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Hier duwt `.emit` een waarde de live supply in, en elke huidige tap ontvangt haar. De tap zat er vóór de uitzendingen, dus ving hij beide waarden op.

Het cruciale verschil met een on-demand-supply is timing: een live supply onthoudt **geen** eerdere waarden. Een tap die na een `emit` toegevoegd wordt, zou missen wat vóór zijn abonnement uitgezonden is. Live supplies zijn het juiste model voor echte gebeurtenissen — kliks, berichten, sensormetingen — waar "wat er nu gebeurt" ertoe doet en het verleden weg is.

Kort gezegd: gebruik een on-demand-supply om een vaste reeks voor elke abonnee opnieuw af te spelen, en een live supply (via een `Supplier`) om gebeurtenissen uit te zenden zodra ze gebeuren.

{% include nav.html %}
