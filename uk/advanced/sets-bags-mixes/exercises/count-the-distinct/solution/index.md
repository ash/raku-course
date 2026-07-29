---
title: 'Розв''язання: Порахуйте різні'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Вихідний код можна знайти у файлі [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Вивід

```
7
```

## Коментарі

1. Передача масиву до `set` будує множину його значень. Оскільки множина зберігає лише різні значення, повторювані числа злипаються в одне.

1. Далі метод `elems` повертає кількість різних значень, тобто `7`.

{% include nav.html %}
