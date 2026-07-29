---
title: 'Решение: Свяжите скаляр'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Исходный код можно найти в файле [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Вывод

```
9
1
```

## Комментарии

1. Связывание через `:=` делает `$bound` ещё одним именем того же контейнера, что и `$source`,
а не его копией. Поэтому изменение `$source` видно через `$bound`, и он печатает `9`.

1. Обычное присваивание через `=` копирует значение в отдельный контейнер, поэтому позднейшее
изменение на `$copy` не влияет, и он по-прежнему печатает `1`.

1. Увидеть их рядом — и есть весь смысл: `:=` разделяет контейнер, а `=` дублирует значение.

{% include nav.html %}
