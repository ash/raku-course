---
title: Kvizo — Nestitaj tabeloj
---

{% include menu.html %}

Estas tabelo de tabelo:

```raku
my @data =
    [1.2, 2.3, 3.4],
    [4.5, 5.6, 6.7],
    [5.6, 6.7, 7.8],
    [6.7, 7.8, 8.9];
```

## Unuaj elementoj

Kion vi atendas vidi en la eligo ĉe ĉiu el la sekvaj linioj de kodo?

{:.quiz-code}
5.6 | say @data[1][1]; # ␣␣␣
1.2 | say @data[0][0]; # ␣␣␣
7.8 | say @data[2][2]; # ␣␣␣

## Komparado

Elektu la ĝustan Boole-an rezulton de la sekvaj komparoj.

{:.quiz-select}
False | `@data[0][0] == @data[2][2]` estas&nbsp; (: False, True :)
True | `@data[1][1] == @data[2][0]` estas&nbsp; (: False, True :)

## Longoj

Kian valoron la sekvaj alvokoj de la metodo `size` redonas?

{:.quiz-select}
4 | `@data.elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[0].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[1].elems` —&nbsp; (: 1, 2, 3, 4, 5 :) 
3 | `@data[2].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)

{% include quiz.html %}

{% include nav.html %}