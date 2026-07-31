---
title: Vocatio cum duplo puncto
translations_gpt:
---

{% include menu.html %}

Cum methodum vel subroutinam vocas, argumenta eius plerumque in parenthesibus ponis: `@a.grep(* > 5)`. Raku alteram formam praebet — pone **colonum** post nomen, et omnia post colonum fiunt index argumentorum, sine ullis parenthesibus:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

Colon in `grep:` idem munus praestat ac parentheses: `(1..10).grep: * %% 2` idem prorsus significat ac `(1..10).grep(* %% 2)`. Duae formae inter se commutari possunt:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

Forma cum colono maxime iucunda est cum methodis quae **codicem clausum** vel expressionem [Whatever](/la/advanced/whatever) accipiunt, quia stratum nidificationis removet. Compara:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # parentheses circa codicem clausum
say @a.sort: { $^b <=> $^a }; # colon — nulla parenthesis claudenda
```

Utrumque `(3 2 1)` imprimit, sed versio cum colono clarius legitur, praesertim cum codex clausus longus est.

Haec est soror vocationis methodicae vocationis sine parenthesibus quam iam cum operatoribus indicis ut `say 1, 2, 3` adhibes — ibi `say` omnia post se ut argumenta sua accipit. Una regula memoranda est formam cum colono **reliquum enuntiati** ut argumenta consumere, itaque in **fine** catenae vocationum esse debet. Quam ob rem `('a' .. 'z')».uc».ord.grep: 60 < * < 70` recte operatur: `grep` ultima vocatio est, et nihil post eam catenadum est. Si plures methodos vocare opus est, forma cum parenthesibus utere vel partes totius expressionis compone ut perspicuae sint:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Unum cavendum: ne colonum **et** parentheses simul coniungas ut `.grep:( … )`. Haec scriptura cum syntaxi signaturae literalis `:( … )` conflicit et recte resolvi non potest. Utere vel `.grep( … )` vel `.grep: …` — alterum, non utrumque.

{% include nav.html %}
