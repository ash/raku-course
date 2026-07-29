---
title: 'Решение: Всички четни'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Намерете програмата във файла [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Изход

```
True
```

## Коментари

1. Проверката се разнишва автоматично: `%% 2` се прилага към всяка стойност, а съединението `all` изисква всяка от тях да мине.

1. И трите числа са четни, така че резултатът е `True`. Ако дори едно беше нечетно, щеше да се получи `False`.

{% include nav.html %}
