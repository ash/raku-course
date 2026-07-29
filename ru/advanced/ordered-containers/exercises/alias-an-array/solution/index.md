---
title: 'Решение: Псевдоним для массива'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Исходный код можно найти в файле [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Вывод

```
[10 20 30 40]
```

## Комментарии

1. Связывание `@alias := @original` делает `@alias` ещё одним именем того же самого
контейнера-массива, а не его копией.

1. Изменение на этот раз выполняется через `@original`, и оно структурное — `push` добавляет
элемент. Поскольку оба имени обозначают один и тот же контейнер, `@alias` тоже видит новый
элемент. Эти два имени полностью взаимозаменяемы: неважно, каким из них вы читаете или
изменяете массив.

{% include nav.html %}
