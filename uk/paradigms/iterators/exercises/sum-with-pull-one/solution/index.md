---
title: Розв'язання вправи «Сума через pull-one»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Вивід

```
15
```

## Коментарі

1. `.iterator` дає витягувальний погляд на список, і кожен `pull-one` повертає наступне число.

1. Значення **зв'язують** через `:=`, а не присвоюють, щоб `$v =:= IterationEnd` правильно розпізнав кінець — присвоєння через `=` порівнювало б натомість контейнер. Цикл додає `3`, `7` та `5`, потім зустрічає `IterationEnd` і зупиняється, лишаючи `15`.

{% include nav.html %}
