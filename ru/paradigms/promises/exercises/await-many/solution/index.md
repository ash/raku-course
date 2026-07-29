---
title: 'Решение: Дождитесь нескольких'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Исходный код можно найти в файле [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Вывод

```
(APPLE PEAR PLUM)
```

## Комментарии

1. `@words.map(-> $w { start { $w.uc } })` превращает каждое слово в собственный промис, поэтому
все три переводятся в верхний регистр конкурентно. Стрелочный блок даёт слову имя `$w`, так что
каждый промис захватывает нужное.

1. `await @jobs` дожидается всего списка и отдаёт результаты в исходном порядке, давая
`(APPLE PEAR PLUM)`.

{% include nav.html %}
