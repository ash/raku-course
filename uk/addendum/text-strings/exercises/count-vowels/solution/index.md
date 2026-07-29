---
title: Розв'язання вправи «Підрахунок голосних»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Знайдіть програму у файлі [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Вивід

```
6
```

## Коментарі

1. Передавання регексу в `.comb` повертає кожен символ, що збігається. Клас
символів `<[aeiouAEIOU]>` перелічує голосні в обох регістрах.

1. Префіксний `+` переводить отриманий список у числовий контекст, даючи його
довжину — кількість голосних.

{% include nav.html %}
