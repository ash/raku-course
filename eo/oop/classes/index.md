---
title: Klasoj
translations_gpt:
---

{% include menu.html %}

Ĝis nun la datumtipoj, kiujn vi uzis — nombroj, ĉenoj, tabeloj kaj tiel plu — ĉiuj estis enkonstruitaj en Raku. _Objekt-orientita programado_ permesas al vi difini viajn proprajn tipojn, nomatajn _klasoj_, kaj krei valorojn de tiuj tipoj, nomatajn _objektoj_.

Klaso estas difinita per la ŝlosilvorto `class`, sekvata de nomo kaj bloko:

```raku
class Dog {
}
```

Ĉi tiu klaso `Dog` estas malplena por nun, sed ĝi jam estas nova tipo. Por krei objekton de la klaso — _ekzempleron_ — voku la metodon `new` sur la nomo de la klaso:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

La variablo `$rex` nun enhavas objekton `Dog`. Ĉiu voko de `new` kreas apartan objekton:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` kaj `$fido` estas du apartaj hundoj, kvankam la klaso ankoraŭ havas neniun enhavon. En la sekvaj sekcioj vi donos al klaso siajn proprajn datumojn (_atributojn_) kaj sian propran konduton (_metodojn_). La unua temo pli detale rigardas la diferencon inter klaso kaj ĝiaj ekzempleroj.

{% include nav.html %}
