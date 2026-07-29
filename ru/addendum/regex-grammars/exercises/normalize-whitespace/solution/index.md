---
title: 'Решение: Нормализуйте пробелы'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Исходный код можно найти в файле [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Вывод

```
too many spaces
```

## Комментарии

1. `.trim` убирает пробелы в начале и в конце, а замена затем превращает каждую цепочку пробельных
символов `\s+` в один пробел.

1. Наречие `:g` делает замену глобальной, поэтому схлопываются *все* промежутки, а не только
первый.

{% include nav.html %}
