---
title: 'Решение: Все числа'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Исходный код можно найти в файле [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Вывод

```
5+10+15
```

## Комментарии

1. `\d+` сопоставляет целую вереницу цифр, а `:g` собирает все такие вереницы — здесь `5`, `10`
и `15`.

1. Каждое совпадение является объектом совпадения, поэтому `.map(*.Str)` превращает их в обычные
строки, прежде чем соединить знаками `+`.

{% include nav.html %}
