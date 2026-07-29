---
title: 'Решение: Действие с верхним регистром'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Вывод

```
HELLO
```

## Комментарии

1. Грамматика захватывает слово, а класс действий решает, что с ним делать.

1. `$<word>.Str` даёт совпавший текст, `.uc` переводит его в верхний регистр, и именно это `make`
сохраняет на совпадении.

{% include nav.html %}
