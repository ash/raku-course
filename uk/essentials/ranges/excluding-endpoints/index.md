---
title: Виключення кінцевих точок діапазону
---

{% include menu.html %}

Щоб виключити один з країв або обидва, змініть оператор створення діапазону за допомогою символу `^`. Існує ще три оператори, які можна створити таким чином. Коментарі вказують числа, які генерують діапазони.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

У простих випадках, як показано вище, можна опустити пробіли навколо оператора діапазону:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Для діапазону, який починається з 0, наприклад, `0..^5`, існує скорочений синтаксис: `^5`.

{% include nav.html %}