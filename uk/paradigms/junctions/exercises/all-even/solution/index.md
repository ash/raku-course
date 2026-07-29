---
title: Розв'язання вправи «Усі парні»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Знайдіть програму у файлі [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Вивід

```
True
```

## Коментарі

1. Перевірка автопотокується: `%% 2` застосовується до кожного значення, а з'єднання `all` вимагає, щоб пройшло кожне з них.

1. Усі три числа парні, тож результатом є `True`. Якби бодай одне було непарним, вийшло б `False`.

{% include nav.html %}
