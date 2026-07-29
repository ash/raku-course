---
title: 'Решение: Унаследуйте грамматику'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Вывод

```
True
True
False
```

## Комментарии

1. И `Dog is Animal`, и `Cat is Animal` наследуют токен `TOP` от базовой грамматики без
изменений; каждая предоставляет только собственный `sound`.

1. Так одна базовая грамматика расширяется двумя разными способами. `Dog` сопоставляет только
`woof`, а `Cat` — только `meow`; поэтому `Dog.parse('meow')` и не срабатывает: собака держится
собственного переопределённого `sound` — ровно так же, как ведут себя переопределённые методы
у объектов.

{% include nav.html %}
