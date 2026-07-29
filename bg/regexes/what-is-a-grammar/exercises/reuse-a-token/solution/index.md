---
title: 'Решение: Използвайте токен повторно'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Намерете програмата във файла [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Изход

```
｢cat｣
｢dog｣
```

## Коментари

1. Един и същ именуван регулярен израз `word` е извикан два пъти в шаблона.

1. Когато именувано прихващане се появи повече от веднъж, резултатите образуват списък, така че до тях се стига като `$<word>[0]` и `$<word>[1]`.

{% include nav.html %}
