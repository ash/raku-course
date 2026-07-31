---
title: Rakstzīmju klases
translations_gpt:
---

{% include menu.html %}

Bieži vien gribat piemeklēt nevis vienu noteiktu rakstzīmi, bet jebkuru rakstzīmi no kādas kopas. Tādu kopu sauc par _rakstzīmju klasi_, un to raksta starp `<[` un `]>`:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

Klase `<[ae]>` piemeklē vienu rakstzīmi, kas ir vai nu `a`, vai `e`, tāpēc sakrīt abas krāsas nosaukuma rakstības.

Iekavās var uzskaitīt _diapazonu_ ar diviem punktiem:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` piemeklē jebkuru vienu ciparu; pirmais cipars virknē ir `1`.

Lai piemeklētu jebkuru rakstzīmi, kas **nav** kopā, tūlīt aiz atverošās iekavas lieciet mīnusa zīmi:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Šeit `<-[a..z]>` piemeklē pirmo rakstzīmi, kas nav mazais burts, proti, izsaukuma zīmi.

Vienā klasē var apvienot vairākus gabalus. Piemēram, `<[a..z A..Z 0..9]>` piemeklē burtu vai ciparu. Atstarpes tur ir tikai lasāmības dēļ — tāpat kā visur regulārajā izteiksmē, arī `<[…]>` iekšienē atstarpes tiek ignorētas, tāpēc `<[a..zA..Z0..9]>` ir tieši tā pati klase.

{% include nav.html %}
