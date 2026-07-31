---
title: Maldiligento kaj fervoro
translations_gpt:
---

{% include menu.html %}

Iuj listoj en Raku estas komputataj nur kiam iliaj elementoj estas bezonataj — ili estas _maldiligentaj_ (lazy). La prefiksoj `lazy` kaj `eager` ebligas al vi kontroli tion eksplicite.

La prefikso `eager` devigas liston esti produktita **tutan samtempe**, tuj:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Sen `eager` la `map` ankoraŭ produktus la valorojn, sed `eager` garantias, ke ili ĉiuj estas komputataj tie kaj tiam anstataŭ laŭbezone.

La prefikso `lazy` faras la malon: ĝi markas liston kiel maldiligenta, tiel ke ĝiaj elementoj estas produktataj nur kiam tirataj. Tio ebligas al listo esti koncepte senfina:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

La metodo `.is-lazy` konfirmas, ke la listo ne provos komputi ĉiujn siajn (senfinajn) elementojn anticipe.

Ĉi tiu konkreta ekzemplo estas ĝuste kazo kie Raku supozus maldiligenton ĉiuokaze: nelimigita intervalo kiel `1 .. Inf` jam estas maldiligenta, do `say (1 .. Inf).is-lazy` presas `True` sen la prefikso. Skribi `lazy` ĉi tie ŝanĝas nenion — ĝi nur eksplicitigas la intencon. La prefikso pravigas sian ekziston kiam vi volas maldiligentigi liston, kiu alie estus komputata avide.

Plej ofte Raku elektas saĝe memstare — intervaloj kaj sekvencoj estas maldiligentaj, ordinara atribuado al tabelo estas avida. Uzu ĉi tiujn prefiksojn kiam vi bezonas superregi tiun elekton: `eager` por devigi multekostan komputadon okazi nun, `lazy` por prokrasti komputadon kiu povus esti granda aŭ senlima.

{% include nav.html %}
