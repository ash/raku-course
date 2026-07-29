---
title: Розв'язання вправи «Одна граматика, дві дії»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Знайдіть програму у файлі [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Вивід

```
30
-10
```

## Коментарі

1. Граматика описує лише форму `число,число`; вона нічого не знає про те, що саме обчислювати.

1. Два класи дій прикріплюють до того самого розбору різні значення — один додає числа, другий віднімає. Достатньо передати в `.parse` інший об'єкт `actions`, щоб отримати інший результат, і граматику при цьому взагалі не змінюють.

{% include nav.html %}
