---
title: 'Решение: Пребройте подаванията'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Намерете програмата във файла [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Изход

```
5
```

## Коментари

1. Включването се изпълнява по веднъж за всяка подадена стойност, каквито и да са стойностите.

1. Увеличаването на `$count` всеки път дава общия брой стойности — `5`.

{% include nav.html %}
