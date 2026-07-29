---
title: 'Решение: Променяем етикет'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Намерете програмата във файла [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Изход

```
draft (revised)
```

## Коментари

1. Трейтът `is rw` кара аксесора да върне записваем контейнер, така че той може да стои отляво на присвояване.

1. Понеже е записваем, съставният оператор `~=` също работи с него: `$l.text ~= ' (revised)'` прочита текущия текст, долепя наставката и записва резултата обратно — всичко това през същия аксесор.

{% include nav.html %}
