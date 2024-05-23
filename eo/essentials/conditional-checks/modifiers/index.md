---
title: Postfix forms of if and unless
---

{% include menu.html %}

Raku ofertas tre oportunan solvon kiam vi volas kondiĉe ekzekuti simplan deklaron. En ĉi tiu kazo, ne necesas krei apartan blokon de kodo. Simple metu `if` aŭ `unless` tuj post la deklaro. En Raku, tiaj konstruaĵoj nomiĝas _deklaraj modifiloj_.

```raku
say 'Bonan posttagmezon' if $hours > 12;

say 'Ĉiuj sistemoj funkcias' unless $broken;
```

{% include nav.html %}