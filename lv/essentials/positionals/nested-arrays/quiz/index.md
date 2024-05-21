---
title: Viktorīna — Iekļautie masīvi
---

{% include menu.html %}

Ir masīvs, kas satur masīvus:

```raku
my @data =
    [1.2, 2.3, 3.4],
    [4.5, 5.6, 6.7],
    [5.6, 6.7, 7.8],
    [6.7, 7.8, 8.9];
```

## Atsevišķi elementi

Ko jūs sagaidāt redzēt izvadē katrā no šīm koda rindām?

{:.quiz-code}
5.6 | say @data[1][1]; # ␣␣␣
1.2 | say @data[0][0]; # ␣␣␣
7.8 | say @data[2][2]; # ␣␣␣

## Salīdzināšana

Izvēlieties pareizo loģisko rezultātu šādiem salīdzinājumiem.

{:.quiz-select}
False | `@data[0][0] == @data[2][2]` ir&nbsp; (: False, True :)
True | `@data[1][1] == @data[2][0]` ir&nbsp; (: False, True :)

## Garumi

Kādu vērtību atgriež šādi `size` metodes izsaukumi?

{:.quiz-select}
4 | `@data.elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[0].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[1].elems` —&nbsp; (: 1, 2, 3, 4, 5 :) 
3 | `@data[2].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)

{% include quiz.html %}

{% include nav.html %}