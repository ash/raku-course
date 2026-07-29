---
title: 'Решение: Разпределете в два масива'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Намерете програмата във файла [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Изход

```
[4 7]
[42 100 15]
```

## Коментари

1. Тялото на `whenever` е обикновен код, така че може повече от това да събира — тук то **решава**, насочвайки всяка стойност към `@big` или `@small` в момента на пристигането ѝ. Вътре във всеки масив стойностите запазват реда на струята.

1. Блокът react изчаква струята да приключи, така че двата масива са пълни още преди отпечатването.

{% include nav.html %}
