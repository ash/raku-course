---
title: 'Решение: Подсчёт и сумма'
translations_gpt: true
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Исходный код можно найти в файле [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Вывод

```
4
41
```

## Комментарии

1. Константы определены как пары, поэтому каждая из них получает значение, которое мы выбрали, а не автоматическую нумерацию от нуля.

1. `.enums` возвращает отображение из имени каждой константы в ее значение. `.elems` подсчитывает записи -- монет четыре.

1. `.values` извлекает только числа, стоящие за именами, а `.sum` складывает их: `1 + 5 + 10 + 25` равно `41`.

{% include nav.html %}
