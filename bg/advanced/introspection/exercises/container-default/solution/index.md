---
title: 'Solution: Стойност по подразбиране на контейнер'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Намерете програмата във файла [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Резултат

```
0
0
```

## Коментари

1. Характеристиката `is default(0)` задава на контейнера стойност по подразбиране. Тъй като нищо не е присвоено, четенето на `$count` връща тази стойност по подразбиране, така че първият ред отпечатва `0`.

1. `.VAR.default` пита самия контейнер за неговата декларирана стойност по подразбиране, която също е `0`. Без характеристиката, нетипизиран контейнер би имал стойност по подразбиране `(Any)`.

{% include nav.html %}
