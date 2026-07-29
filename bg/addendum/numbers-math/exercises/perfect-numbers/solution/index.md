---
title: 'Решение: Съвършени числа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Намерете програмата във файла [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Изход

```
[6 28]
```

## Коментари

1. `(1..^$n).grep($n %% *)` запазва числата под `$n`, които го делят точно — неговите
собствени делители. `%% *` е функция с Whatever, която проверява делимостта.

1. `[+]` сумира тези делители, а външният `grep` запазва само онези числа, които са
равни на тази сума.

{% include nav.html %}
