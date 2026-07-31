---
title: 'Risinājums: Burts vai cipars'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Atrodiet programmu failā [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Izvade

```
｢x｣
```

## Komentāri

1. Klasē var būt vairāki diapazoni cits aiz cita. `<[a..z 0..9]>` piemeklē vienu rakstzīmi, kas ir mazais burts **vai** cipars. Atstarpe starp abiem diapazoniem ir tur tikai lasāmības dēļ — `<[a..z0..9]>` nozīmē tieši to pašu, jo atstarpes `<[…]>` iekšienē tiek ignorētas, gluži tāpat kā citur regulārajā izteiksmē.

1. Pārlūkojot no kreisās puses, abas atstarpes un `@` klasē neietilpst un tiek izlaistas; pirmā sakrītošā rakstzīme ir `x`. (Šī apvienotā klase ir tuva tam, ko apzīmē saīsinājums `\w`.)

{% include nav.html %}
