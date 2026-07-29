---
title: 'Решение: Граматика за пълни имена'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Изход

```
Grace
Hopper
```

## Коментари

1. Токенът `TOP` е мястото, откъдето започва разборът; той се позовава на другите токени
по име с `<first>` и `<last>`, които стават ключове върху съвпадението.

1. `$match<first>` е обект на съвпадението; префиксният `~` го превръща в обикновения
съвпаднал текст.

{% include nav.html %}
