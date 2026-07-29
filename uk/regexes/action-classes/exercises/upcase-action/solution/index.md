---
title: Розв'язання вправи «Дія з великими літерами»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 Знайдіть програму у файлі [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Вивід

```
HELLO
```

## Коментарі

1. Граматика захоплює слово; клас дій вирішує, що з ним робити.

1. `$<word>.Str` дає знайдений текст, а `.uc` переводить його у верхній регістр, — і саме це `make` зберігає на збігу.

{% include nav.html %}
