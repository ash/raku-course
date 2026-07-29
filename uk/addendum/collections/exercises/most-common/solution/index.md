---
title: Розв'язання вправи «Найчастіший елемент»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Знайдіть програму у файлі [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Вивід

```
a
```

## Коментарі

1. Після підрахунку кожного значення в `%count` сортування пар за `-*.value`
ставить найчастішу попереду; `[0].key` тоді повертає цей елемент.

1. Raku може порахувати це за вас за допомогою [`Bag`](/uk/advanced/sets-bags-mixes),
що рахує, скільки разів трапляється кожне значення. Тоді `.max(*.value)` обирає
пару з найбільшою кількістю, а `.key` є самим елементом:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    Увесь підрахунок є одним викликом методу, і жодним явним хешем керувати не
    доводиться.

{% include nav.html %}
