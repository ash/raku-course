---
title: 'Решение: Именуван токен'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Намерете програмата във файла [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Изход

```
｢hello｣
```

## Коментари

1. `my regex word { \w+ }` дава на шаблона име, за да може да се използва повторно.

1. Записът `<word>` в шаблона го съпоставя и прихваща резултата под същото име, достъпно като `$<word>`. Първата поредица от словесни знаци е `hello`.

{% include nav.html %}
