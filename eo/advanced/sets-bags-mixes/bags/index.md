---
title: Sakoj kaj miksaĵoj
translations_gpt:
---

{% include menu.html %}

Aro memoras nur _ĉu_ valoro ĉeestas. Foje vi ankaŭ volas scii, _kiom da fojoj_ ĝi okazas. Por tio servas `Bag`: ĝi tenas kalkulon por ĉiu valoro.

Vi kreas sakon per la rutino `bag`. Ripetitaj valoroj ne kunfandiĝas — ili estas kalkulataj:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Peti al la sako valoron per la subskribo `< >` redonas, kiom da fojoj tiu valoro estis enmetita. La metodo `total` donas la sumon de ĉiuj kalkuloj:

```raku
say bag(<a b a c a>).total; # 5
```

`Mix` estas la sama ideo kiel sako, krom ke la kalkuloj (nomataj _pezoj_) povas esti frakciaj anstataŭ entjeraj. Por atribui eksplicitajn pezojn, parigu ĉiun valoron kun ĝia pezo kaj devigu la liston per `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Serĉi pezon per `< >` kaj sumigi ilin per `total` funkcias ĝuste kiel por sako — nur la nombroj ne devas esti entjeraj. Ĉi tie `total` aldonas la pezojn `2.5` kaj `0.75`, donante `3.25` — ĝi estas la sumo de la pezoj, ne kalkulo de la valoroj. Sakoj kaj miksaĵoj estas oportunaj ĉiam kiam vi bezonas sekvi kvantojn — ekzemple, kalkuli kiom ofte ĉiu vorto aperas en teksto, aŭ atribui pezojn al opcioj.

{% include nav.html %}
