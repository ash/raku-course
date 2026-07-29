---
title: 'Решение: Сума с pull-one'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Изход

```
15
```

## Коментари

1. `.iterator` дава изтеглящия поглед към списъка, а всяко `pull-one` връща следващото число.

1. Стойността се **свързва** с `:=`, а не се присвоява, за да може `$v =:= IterationEnd` да разпознае края правилно — присвояване с `=` би сравнявало контейнера. Цикълът добавя `3`, `7` и `5`, после среща `IterationEnd` и спира, оставяйки `15`.

{% include nav.html %}
