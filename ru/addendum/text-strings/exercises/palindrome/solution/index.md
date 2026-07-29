---
title: 'Решение: Проверка на палиндром'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Исходный код можно найти в файле [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Вывод

```
level: yes
hello: no
racecar: yes
```

## Комментарии

1. `.flip` переворачивает символы строки. Слово является палиндромом ровно тогда, когда оно равно
собственному перевёрнутому виду, а тернарный оператор превращает это в `yes` или `no`.

{% include nav.html %}
