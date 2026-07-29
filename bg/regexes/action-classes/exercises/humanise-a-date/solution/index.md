---
title: 'Решение: Дата по човешки'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Намерете програмата във файла [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Изход

```
5 July 2026
```

## Коментари

1. За разлика от обикновено аритметично действие, методите на токените създават стойности от **различни видове**: `year` и `day` създават цели числа, а `month` създава *низ*, използвайки числовата си стойност като индекс в списък с имена на месеци. `$/ - 1` превръща двуцифреното съвпадение в число (`07` → `7`) и го измества към индекс от нула, така че месец `07` създава `July`.

1. Методът `TOP` изобщо не преглежда суровия текст. Той просто прочита трите стойности, които подметодите вече са създали — `$<day>.made`, `$<month>.made`, `$<year>.made`, — и ги вмъква в крайния низ. Прочитането на `5` обратно от `day` заодно безплатно маха водещата нула.

1. Това е ежедневната работа на класа за действия: разбираш структурирания вход веднъж, а после оставяш всеки метод да превърне своето парче в онова, което е нужно на останалата част от програмата.

{% include nav.html %}
