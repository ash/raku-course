---
title: 'Розв''язання: Кількість і сума'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Вихідний код можна знайти у файлі [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Вивід

```
4
41
```

## Коментарі

1. Константи визначено парами, тож кожна отримує обране нами значення, а не автоматичну нумерацію від нуля.

1. `.enums` повертає відображення кожного імені константи на її значення. `.elems` рахує записи — монет чотири.

1. `.values` витягує самі лише числа, що стоять за іменами, а `.sum` їх додає: `1 + 5 + 10 + 25` дорівнює `41`.

{% include nav.html %}
