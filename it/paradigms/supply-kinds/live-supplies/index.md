---
title: Supply live
translations_gpt:
---

{% include menu.html %}

Un supply _dal vivo_ trasmette i valori man mano che accadono a qualunque presa sia in ascolto **in quel momento**. Ne crei uno con un `Supplier`: il supplier è l'estremità che invia, e il suo `.Supply` è l'estremità che riceve, a cui gli altri attingono.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Qui `.emit` spinge un valore nel supply dal vivo, e ogni presa attuale lo riceve. La presa era già al suo posto prima delle emissioni, quindi ha catturato entrambi i valori.

La differenza cruciale rispetto a un supply su richiesta è il tempismo: un supply dal vivo **non** ricorda i valori passati. Una presa aggiunta dopo un `emit` si perderebbe tutto ciò che è stato emesso prima che si abbonasse. I supply dal vivo sono il modello giusto per gli eventi veri — clic, messaggi, letture di sensori — dove conta «ciò che sta accadendo ora» e il passato è andato.

In breve: usa un supply su richiesta per riproporre una sequenza fissa a ogni abbonato, e un supply dal vivo (attraverso un `Supplier`) per trasmettere gli eventi man mano che accadono.

{% include nav.html %}
