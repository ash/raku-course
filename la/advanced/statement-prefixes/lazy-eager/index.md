---
title: Pigritia et alacri
---

{% include menu.html %}

Aliqui indices in Raku tantum secundum necessitatem computantur — _pigri_ sunt. Praefixa `lazy` et `eager` tibi permittunt hoc explicite controllare.

Praefixum `eager` indicem cogit **totum simul** produci, statim:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Sine `eager` `map` adhuc valores produceret, sed `eager` certos efficit quod omnes ibi et tunc computantur potius quam secundum necessitatem.

Praefixum `lazy` contrarium facit: indicem ut pigrum signat, ita ut eius elementa tantum cum petuntur producuntur. Hoc est quod sinit indicem conceptualiter infinitum esse:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

Methodus `.is-lazy` confirmat indicem non conaturum omnia sua (infinita) elementa ante computare.

Hoc exemplum particulare est exacte casus ubi Raku pigritiam iam assumeret: intervallum illimitatum sicut `1 .. Inf` iam pigrum est, ergo `say (1 .. Inf).is-lazy` imprimit `True` sine praefixo. `lazy` hic scribere nihil mutat — tantum intentionem explicitam facit. Praefixum suum meritum obtinet cum indicem qui aliter impigre computaretur pigrum facere vis.

Plerumque Raku prudenter per se eligit — intervalla et sequentiae pigra sunt, ordinaria assignatio indicis impigra est. Ad haec praefixa recurre cum hanc electionem superscribere debes: `eager` ad computationem onerosam nunc fieri cogendam, `lazy` ad differendum quae magna vel illimitata esse posset.

{% include nav.html %}
