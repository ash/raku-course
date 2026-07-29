---
title: 'Решение: Наследете граматика'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 Намерете програмата във файла [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Изход

```
True
True
False
```

## Коментари

1. И `Dog is Animal`, и `Cat is Animal` наследяват токена `TOP` от базовата граматика непроменен; всяка предоставя само собствения си `sound`.

1. Така една базова граматика е разширена по два различни начина. `Dog` съпоставя само `woof`, а `Cat` — само `meow`; именно затова `Dog.parse('meow')` се проваля: кучето пази собствения си предефиниран `sound`, точно както се държат предефинираните методи върху обекти.

{% include nav.html %}
