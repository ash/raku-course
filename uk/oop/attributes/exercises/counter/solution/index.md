---
title: 'Розв''язання: Лічильник'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Вихідний код можна знайти у файлі [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Вивід

```
0
5
```

## Коментарі

1. Атрибут оголошено як `is rw`, щоб його аксесор повертав записуваний контейнер, а `= 0` дає йому початкове значення. Перший `say` підтверджує, що новий лічильник справді починає з цього типового значення — `0`.

1. Оскільки аксесор записуваний, збільшення через `++` працює як очікується.

{% include nav.html %}
