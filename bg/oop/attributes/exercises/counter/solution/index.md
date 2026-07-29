---
title: 'Решение: Брояч'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Изход

```
0
5
```

## Коментари

1. Атрибутът е деклариран с `is rw`, за да върне аксесорът му записваем контейнер, а `= 0` му дава начална стойност. Първото `say` потвърждава, че новосъздаден брояч наистина започва от тази стойност по подразбиране — `0`.

1. Понеже аксесорът е записваем, увеличаването му с `++` работи както се очаква.

{% include nav.html %}
