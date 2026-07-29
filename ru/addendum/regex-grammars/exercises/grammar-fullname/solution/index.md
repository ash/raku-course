---
title: 'Решение: Грамматика для полных имён'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Исходный код можно найти в файле [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Вывод

```
Grace
Hopper
```

## Комментарии

1. Токен `TOP` — это место, где начинается разбор; он ссылается на другие токены по имени
через `<first>` и `<last>`, которые становятся ключами в объекте совпадения.

1. `$match<first>` — объект совпадения; префиксный `~` превращает его в обычный совпавший текст.

{% include nav.html %}
