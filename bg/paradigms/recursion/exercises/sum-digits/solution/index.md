---
title: 'Решение: Сума на цифрите'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Намерете програмата във файла [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Изход

```
10
```

## Коментари

1. Базовият случай е едноцифрено число, което само по себе си е сумата на цифрите си.

1. Иначе `$n % 10` е последната цифра, а `$n div 10` я маха; `1 + 2 + 3 + 4` е `10`.

{% include nav.html %}
