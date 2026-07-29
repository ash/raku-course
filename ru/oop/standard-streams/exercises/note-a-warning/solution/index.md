---
title: 'Решение: Предупреждение через `note`'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Исходный код можно найти в файле [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Вывод

```
Warning: the value is negative
3
```

## Комментарии

1. `note` отправляет предупреждение в стандартный поток ошибок — и только тогда, когда значение
действительно отрицательное. `say` отправляет настоящий результат, абсолютное значение `3`,
в стандартный вывод.

1. Держать диагностику в потоке ошибок означает, что она не засоряет настоящий вывод программы:
если отбросить его через `2>/dev/null`, останется только `3`.

{% include nav.html %}
