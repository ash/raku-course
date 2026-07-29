---
title: Розв'язання вправи «Булеве значення через proto»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Знайдіть програму у файлі [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Вивід

```
True
True
False
```

## Коментарі

1. Прототокен `bool` має два іменовані варіанти: `true` та `false`.

1. Кожен розбір обирає відповідний варіант, тож і `'true'`, і `'false'` успішні. Прототокен — це охайний граматичний спосіб сказати «одна з цих іменованих альтернатив».

1. `'unknown'` не збігається з жодним варіантом, тож прототокенові немає куди диспетчеризувати, і розбір зазнає невдачі — `False`. Прото приймає рівно ті альтернативи, які ви перелічили, і нічого більше.

{% include nav.html %}
