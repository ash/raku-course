---
title: 'Решение: Сумма с помощью pull-one'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Исходный код можно найти в файле [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Вывод

```
15
```

## Комментарии

1. `.iterator` даёт представление списка, из которого значения вытягивают, и каждый `pull-one`
возвращает очередное число.

1. Значение **связывается** через `:=`, а не присваивается, чтобы `$v =:= IterationEnd` правильно
распознал конец: присваивание через `=` сравнивало бы контейнер, а не значение. Цикл прибавляет
`3`, `7` и `5`, затем встречает `IterationEnd` и останавливается, оставив `15`.

{% include nav.html %}
