---
title: 'Решение: Сортировка по двум ключам'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Исходный код можно найти в файле [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Вывод

```
Bob (25)
Anna (30)
Cara (30)
```

## Комментарии

1. Когда блок `.sort` возвращает список, Raku сравнивает сперва по первому элементу, затем
по второму, — поэтому `{ .<age>, .<name> }` сортирует по возрасту, а имя использует лишь для
разрешения ничьих.

1. У Anna и Cara одинаковый возраст `30`, поэтому они упорядочены по алфавиту, а Bob, будучи моложе,
идёт первым.

{% include nav.html %}
