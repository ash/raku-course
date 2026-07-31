---
title: Mittere et accipere
translations_gpt:
---

{% include menu.html %}

Crea canalem per `Channel.new`. Valores immitte per `.send`, eosque extrahe per `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Canalis **ordo** est: valores eodem ordine exeunt quo intraverunt — primus intrans, primus exiens. Itaque primum `.receive` `1` reddit, valorem qui primus missus est.

Vis canalis in eo est quod mittere et accipere tuto ex **filis diversis** eodem tempore fieri possunt. Productor mittere pergere potest dum consumptor accipere pergit, et Raku curat ne ullus valor pereat vel duplicetur:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Hic negotium in fundo `1, 2, 3` mittit; programma principale accipit. `.receive` exspectat si canalis momento vacuus est, itaque consumptor numquam productorem praecurrit.

{% include nav.html %}
