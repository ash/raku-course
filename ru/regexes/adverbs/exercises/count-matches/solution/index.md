---
title: 'Решение: Подсчёт совпадений'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Исходный код можно найти в файле [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Вывод

```
5
```

## Комментарии

1. Класс символов `<[aeiou]>` соответствует одной гласной, а наречие `:g` возвращает все такие
совпадения, а не только первое.

1. Результат ведёт себя как список, поэтому `.elems` считает совпадения: пять гласных в слове
`education` (e, u, a, i, o).

{% include nav.html %}
