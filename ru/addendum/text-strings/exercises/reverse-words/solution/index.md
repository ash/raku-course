---
title: 'Решение: Обратный порядок слов'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Исходный код можно найти в файле [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Вывод

```
nice really is Raku
```

## Комментарии

1. `.words` разбивает предложение на список, `.reverse` переворачивает порядок списка,
а `.join(' ')` склеивает слова обратно одиночными пробелами.

{% include nav.html %}
