---
title: Вікторина — Вкладені масиви
---

{% include menu.html %}

Є масив масивів:

```raku
my @data =
    [1.2, 2.3, 3.4],
    [4.5, 5.6, 6.7],
    [5.6, 6.7, 7.8],
    [6.7, 7.8, 8.9];
```

## Окремі елементи

Що ви очікуєте побачити у виводі для кожного з наступних рядків коду?

{:.quiz-code}
5.6 | say @data[1][1]; # ␣␣␣
1.2 | say @data[0][0]; # ␣␣␣
7.8 | say @data[2][2]; # ␣␣␣

## Порівняння

Виберіть правильний булевий результат наступних порівнянь.

{:.quiz-select}
False | `@data[0][0] == @data[2][2]` є&nbsp; (: False, True :)
True | `@data[1][1] == @data[2][0]` є&nbsp; (: False, True :)

## Довжини

Яке значення повертають наступні виклики методу `size`?

{:.quiz-select}
4 | `@data.elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[0].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[1].elems` —&nbsp; (: 1, 2, 3, 4, 5 :) 
3 | `@data[2].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)

{% include quiz.html %}

{% include nav.html %}