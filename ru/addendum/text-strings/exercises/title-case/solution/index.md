---
title: 'Решение: Каждое слово с заглавной буквы'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Исходный код можно найти в файле [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Вывод

```
The Lord Of The Rings
```

## Комментарии

1. `.tc` («title-case») делает первую букву строки заглавной. Гипероператор `>>.tc` применяет
этот метод сразу ко всем словам, а `.join(' ')` собирает предложение обратно.

{% include nav.html %}
