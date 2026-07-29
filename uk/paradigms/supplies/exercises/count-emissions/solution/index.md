---
title: Розв'язання вправи «Порахуйте видачі»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Знайдіть програму у файлі [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Вивід

```
5
```

## Коментарі

1. Підключення виконується по разу на кожне видане значення, якими б ті значення не були.

1. Збільшення `$count` щоразу дає загальну кількість значень — `5`.

{% include nav.html %}
