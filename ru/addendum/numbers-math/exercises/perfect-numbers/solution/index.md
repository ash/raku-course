---
title: 'Решение: Совершенные числа'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Исходный код можно найти в файле [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Вывод

```
[6 28]
```

## Комментарии

1. `(1..^$n).grep($n %% *)` оставляет те числа меньше `$n`, на которые оно делится нацело, —
его собственные делители. `%% *` — это функция с Whatever, проверяющая делимость.

1. `[+]` складывает эти делители, а внешний `grep` оставляет только те числа, которые равны
получившейся сумме.

{% include nav.html %}
