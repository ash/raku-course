---
title: 'Решение: Обърнете реда на думите'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Намерете програмата във файла [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Изход

```
nice really is Raku
```

## Коментари

1. `.words` разбива изречението на списък, `.reverse` обръща реда на списъка, а
`.join(' ')` слепва думите обратно с единични интервали.

{% include nav.html %}
