---
title: 'Решение: Подсчёт гласных'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Исходный код можно найти в файле [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Вывод

```
6
```

## Комментарии

1. Переданное в `.comb` регулярное выражение возвращает все подходящие символы. Класс символов
`<[aeiouAEIOU]>` перечисляет гласные в обоих регистрах.

1. Префиксный `+` переводит получившийся список в числовой контекст, давая его длину — количество
гласных.

{% include nav.html %}
