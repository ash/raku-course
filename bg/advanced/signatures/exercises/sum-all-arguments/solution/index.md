---
title: 'Solution: Сума на всички аргументи'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Можете да намерите пълния код във файла [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Резултат

```
15
```

## Коментари

1. Slurpy параметърът `*@nums` събира всички аргументи в масива `@nums`, колкото и да са на брой.

1. Мета-операторът за редукция `[+]` след това ги събира всички, давайки `15`.

{% include nav.html %}
