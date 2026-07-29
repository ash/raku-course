---
title: 'Решение: Разбор на хаштаг'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Намерете програмата във файла [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Изход

```
｢raku｣
```

## Коментари

1. `TOP` изписва фиксираното `#`, следвано от токена `<tag>`.

1. `.parse` изисква целият низ да съвпадне, а след това тагът е достъпен като прихващането `<tag>`.

## Друг вариант

Вместо това можете да оставите `tag` да съпостави целия хаштаг — `#` заедно с думата — и да стигнете до думата през вложено правило `word`:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Това отпечатва същото `｢raku｣`. Сега `<tag>` прихваща целия `#raku`, а до думата вътре в него се стига като `<tag><word>`. Граматиката се чете малко повече като нещото, което описва — хаштагът *е* `#`, следван от дума, а думата е самостоятелна именувана част.

{% include nav.html %}
