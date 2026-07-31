---
title: Maŝin-nivelaj tipoj
translations_gpt:
---

{% include menu.html %}

La indiĝenaj tipoj havas minusklajn nomojn: `int`, `num` kaj `str`. Vi deklaras variablon per unu el ili same kiel vi farus per `Int` aŭ `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Indiĝena valoro korespondas rekte al maŝina registro aŭ vorto, sen la envolva objekto, kiun portas normala Raku-valoro. Tio igas indiĝenajn tipojn pli rapidaj kaj pli kompaktaj, kio gravas en striktaj nombraj bukloj kaj grandaj tabeloj.

Estas unu konduto, pri kiu vi tuj konsciu: indiĝena variablo neniam povas esti nedefinita. Dum ordinara `Int`-ujo komenciĝas kiel nedefinita `Any`, indiĝena `int` komenciĝas je **nulo**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

La sama validas por indiĝenaj tabeloj, deklaritaj per metado de la indiĝena tipo antaŭ la `@`-variablon:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Tia tabelo konservas siajn elementojn kiel krudajn maŝinajn entjerojn anstataŭ kiel enkastitajn `Int`-objektojn, do ĝi uzas malpli da memoro. Kiam vi introspektas indiĝenan valoron, ĝi estas aŭtomate _enkastita_ en la konvenan plenan tipon, tial `(my int $b).WHAT` raportas `(Int)`.

{% include nav.html %}
