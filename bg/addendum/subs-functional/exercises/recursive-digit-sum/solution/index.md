---
title: 'Решение: Сума на цифрите чрез рекурсия'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Намерете програмата във файла [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Изход

```
15
```

## Коментари

1. Базовият случай е едноцифрено число, което само по себе си е сумата на цифрите си.
Иначе процедурата обелва последната цифра с `$n % 10` и рекурсира върху останалото —
`$n div 10`.

{% include nav.html %}
