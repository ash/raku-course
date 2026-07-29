---
title: 'Розв''язання: Потроєння підпрограмою'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Вихідний код можна знайти у файлі [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Вивід

```
21
```

## Коментарі

1. Як підпрограма, `triple` є самостійною операцією: значення, з яким треба працювати, вона отримує аргументом.

1. Парна вправа розв'язує те саме завдання методом, тож ви можете порівняти два підходи.

{% include nav.html %}
