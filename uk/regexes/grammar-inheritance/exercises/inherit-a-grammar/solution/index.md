---
title: Розв'язання вправи «Успадкуйте граматику»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Вивід

```
True
True
False
```

## Коментарі

1. І `Dog is Animal`, і `Cat is Animal` успадковують токен `TOP` від базової граматики без змін; кожна надає лише власний `sound`.

1. Тож одну базову граматику розширено двома різними способами. `Dog` зіставляється лише з `woof`, а `Cat` — лише з `meow`; саме тому `Dog.parse('meow')` зазнає невдачі: собака зберігає власний перевизначений `sound`, рівно так, як поводяться перевизначені методи на об'єктах.

{% include nav.html %}
