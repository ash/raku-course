---
title: Live-Supplies
translations_gpt:
---

{% include menu.html %}

Ein _Live_-Supply sendet Werte, sobald sie auftreten, an die Zapfstellen, die **in diesem Augenblick** zuhören. Sie erzeugen eines mit einem `Supplier`: Der Supplier ist die Sendeseite, und sein `.Supply` ist die Empfangsseite, die andere anzapfen.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Hier schiebt `.emit` einen Wert in das Live-Supply, und jede derzeitige Zapfstelle erhält ihn. Die Zapfstelle war vor den Aussendungen da, sie hat also beide Werte eingefangen.

Der entscheidende Unterschied zu einem On-demand-Supply ist die Zeit: Ein Live-Supply erinnert sich **nicht** an vergangene Werte. Eine nach einem `emit` hinzugefügte Zapfstelle verpasste alles, was vor ihrem Abonnement ausgesandt wurde. Live-Supplies sind das richtige Modell für echte Ereignisse — Klicks, Nachrichten, Sensormesswerte —, bei denen „was gerade geschieht“ zählt und die Vergangenheit vorbei ist.

Kurz: Nehmen Sie ein On-demand-Supply, um jedem Abonnenten eine feste Folge erneut abzuspielen, und ein Live-Supply (über einen `Supplier`), um Ereignisse zu senden, sobald sie geschehen.

{% include nav.html %}
