---
title: 'Решение: Счётчик'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Исходный код можно найти в файле [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Вывод

```
0
5
```

## Комментарии

1. Атрибут объявлен с `is rw`, чтобы его аксессор возвращал изменяемый контейнер, а `= 0`
задаёт начальное значение. Первый `say` подтверждает, что только что созданный счётчик
действительно начинается с этого значения по умолчанию — `0`.

1. Поскольку аксессор допускает запись, увеличение с помощью `++` работает как ожидается.

{% include nav.html %}
