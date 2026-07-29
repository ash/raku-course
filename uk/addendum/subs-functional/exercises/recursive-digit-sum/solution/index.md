---
title: Розв'язання вправи «Сума цифр рекурсією»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Знайдіть програму у файлі [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Вивід

```
15
```

## Коментарі

1. Базовим випадком є однозначне число, яке само собі є сумою цифр. Інакше
процедура відлущує останню цифру через `$n % 10` і рекурсує на решті —
`$n div 10`.

{% include nav.html %}
