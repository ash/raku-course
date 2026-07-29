---
title: 'Решение: Разберите хештег'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Исходный код можно найти в файле [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Вывод

```
｢raku｣
```

## Комментарии

1. `TOP` выписывает фиксированный `#`, за которым идёт токен `<tag>`.

1. `.parse` требует, чтобы совпала вся строка, после чего тег доступен как захват `<tag>`.

## Другой вариант

Можно вместо этого позволить `tag` сопоставлять хештег целиком — `#` вместе со словом, —
а до слова добираться через вложенное правило `word`:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Программа печатает то же `｢raku｣`. Теперь `<tag>` захватывает весь `#raku`, а до слова внутри
добираются как `<tag><word>`. Грамматика чуть больше похожа на то, что она описывает: хештег
*и есть* `#`, за которым идёт слово, а слово — самостоятельная именованная часть.

{% include nav.html %}
