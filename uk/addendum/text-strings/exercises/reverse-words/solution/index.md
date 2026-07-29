---
title: Розв'язання вправи «Зворотний порядок слів»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Знайдіть програму у файлі [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Вивід

```
nice really is Raku
```

## Коментарі

1. `.words` розбиває речення на список, `.reverse` перевертає порядок списку, а
`.join(' ')` склеює слова назад одинарними пробілами.

{% include nav.html %}
