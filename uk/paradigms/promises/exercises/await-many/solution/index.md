---
title: Розв'язання вправи «Дочекайтеся багатьох»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Знайдіть програму у файлі [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Вивід

```
(APPLE PEAR PLUM)
```

## Коментарі

1. `@words.map(-> $w { start { $w.uc } })` перетворює кожне слово на власну обіцянку, тож усі три переводяться у верхній регістр конкурентно. Гострий блок називає слово `$w`, тож кожна обіцянка захоплює саме своє.

1. `await @jobs` чекає на весь список і повертає результати в їхньому початковому порядку, даючи `(APPLE PEAR PLUM)`.

{% include nav.html %}
