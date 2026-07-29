---
title: 'Solution: Псевдоним на масив'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Можете да намерите изходния код във файла [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Резултат

```
[10 20 30 40]
```

## Коментари

1. Свързването `@alias := @original` прави `@alias` друго име за същия контейнер-масив, а не негово копие.

1. Промяната се извършва чрез `@original` този път и е структурна — `push` добавя елемент. Тъй като двете имена са абсолютно същият контейнер, `@alias` вижда и новия елемент. Двете имена са напълно взаимозаменяеми: няма значение кое от тях ще използвате за четене или промяна на масива.

{% include nav.html %}
