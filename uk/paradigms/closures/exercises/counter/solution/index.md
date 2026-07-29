---
title: Розв'язання вправи «Лічильник»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Знайдіть програму у файлі [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Вивід

```
10
20
30
```

## Коментарі

1. Замикання захоплює з `make-counter` дві речі: параметр `$step` та приватну змінну `$n`. Обидві залишаються живими після того, як `make-counter` повернувся.

1. Кожен виклик додає `$step` до `$n` і повертає нову суму. Лічильник, побудований з іншим кроком, просувався б натомість на цю величину.

{% include nav.html %}
