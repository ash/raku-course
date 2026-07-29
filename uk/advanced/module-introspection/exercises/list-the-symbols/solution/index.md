---
title: 'Розв''язання: Перелічіть символи'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

Програма `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Вивід

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Коментарі

1. `Circle::` є пакунком модуля, а `.keys` перелічує імена, які він містить, кожне разом із сигілом.

1. `.elems` рахує ці імена — модуль визначає дві змінні `our`, тож кількість дорівнює `2`.

1. `.keys` не гарантує жодного конкретного порядку, тож ми застосовуємо `.sort`, щоб отримати стабільний алфавітний результат `($pi $tau)`. Без сортування два імені могли б виходити то в одному, то в іншому порядку між запусками.

{% include nav.html %}
