---
title: 'Решение: Назовете типа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Cat {
}

class Dog {
}

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Намерете програмата във файла [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Изход

```
(Cat)
True
False
```

## Коментари

1. `WHAT` връща обекта на типа, показан в скоби като `(Cat)` — `$felix` е `Cat`.

1. `===` сравнява два обекта на типа за идентичност. `$felix.WHAT === Cat.WHAT` дава `True`, защото Феликс наистина е `Cat`, докато `$felix.WHAT === Dog.WHAT` дава `False` — `Cat` и `Dog` са различни типове, така че обектите им на типа не са едно и също.

{% include nav.html %}
