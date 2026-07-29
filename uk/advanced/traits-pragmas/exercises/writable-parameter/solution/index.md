---
title: 'Розв''язання: Параметр, доступний для запису'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Вихідний код можна знайти у файлі [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Вивід

```
42
```

## Коментарі

1. `is rw` зв'язує параметр `$n` зі змінною викликача `$score`, тож `$n *= 2` усередині `double` змінює саму `$score`, — саме тому виводиться `42`.

1. Без `is rw` параметр був би доступний лише для читання, і `$n *= 2` став би помилкою під час компіляції. Позначення його як `is copy` натомість дало б `double` приватну копію для змін, лишивши `$score` недоторканою зі значенням `21`.

{% include nav.html %}
