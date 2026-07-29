---
title: 'Решение: Най-честият елемент'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Намерете програмата във файла [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Изход

```
a
```

## Коментари

1. След преброяването на всяка стойност в `%count` сортирането на двойките по `-*.value`
слага най-честата отпред; `[0].key` тогава връща този елемент.

1. Raku може да преброи вместо вас с [`Bag`](/bg/advanced/sets-bags-mixes), който брои
колко пъти се появява всяка стойност. Тогава `.max(*.value)` избира двойката с най-голям
брой, а `.key` е самият елемент:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    Цялото преброяване е едно извикване на метод и няма изричен хеш за управляване.

{% include nav.html %}
