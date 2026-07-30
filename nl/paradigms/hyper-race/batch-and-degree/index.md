---
title: Afstemmen met :batch en :degree
translations_gpt:
---

{% include menu.html %}

Zowel `.hyper` als `.race` accepteert twee bijwoorden die bepalen *hoe* het werk over threads verdeeld wordt: `:degree` en `:batch`. Je hebt ze zelden nodig, maar het zijn de knoppen waar je naar grijpt wanneer je op snelheid afstemt.

## `:degree` — hoeveel workers

`:degree` bepaalt hoeveel werkthreads tegelijk lopen:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Standaard ligt de graad dicht bij het aantal CPU-kernen dat de machine heeft — op een machine met acht kernen is het `7`, wat één kern voor het hoofdprogramma overlaat. Hem veel hoger zetten dan het aantal kernen helpt zelden, omdat er niet meer kernen zijn om op te draaien, en de extra coördinatie kan het zelfs vertragen.

## `:batch` — hoeveel elementen tegelijk

`:batch` bepaalt hoeveel elementen elke worker in één keer neemt voordat hij om meer terugkomt:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

De standaardbatch is `64`, en de grootte is een afweging:

* Een **grote** batch betekent minder heen en weer tussen de workers en de scheduler — minder overhead, wat goed is wanneer elk element ongeveer evenveel kost.
* Een **kleine** batch verdeelt het werk gelijkmatiger wanneer sommige elementen veel duurder zijn dan andere, zodat geen enkele worker met alle trage blijft zitten — ten koste van meer coördinatie.

Je kunt beide tegelijk instellen, op `.race` net zo goed als op `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Als je benieuwd bent wat de standaardwaarden werkelijk zijn, kun je er via Rakudo's interne onderdelen naar gluren. Let op: dit leest een *private* attribuut — het is geen stabiele API, en de getallen hangen van je machine af:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Hier is `batch` de vaste standaardwaarde `64`, terwijl `degree` `7` is — één minder dan de acht kernen van deze machine.

</div>

## Het blijven slechts hints

Net als `.hyper` en `.race` zelf **vragen** deze bijwoorden om een bepaalde verdeling in plaats van haar te garanderen. Een compiler mag ze honoreren, bijstellen of volledig negeren — beschouw `:batch` en `:degree` dus als knoppen om aan te draaien bij het afstemmen, niet als beloften over hoe het werk precies zal lopen.

{% include nav.html %}
