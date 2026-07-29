---
title: 'Решение: Незадължителен знак'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Намерете програмата във файла [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Изход

```
｢-42｣
```

## Коментари

1. Частта `'-'?` съпоставя незадължителен знак минус — нула или един такъв.

1. `\d+` след това съпоставя поредицата от цифри. Същият шаблон съпоставя и число без знак, например `42`.

{% include nav.html %}
