---
title: 'Решение: Действие с главни букви'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Изход

```
HELLO
```

## Коментари

1. Граматиката прихваща думата; класът за действия решава какво да прави с нея.

1. `$<word>.Str` дава съвпадналия текст, а `.uc` го превръща в главни букви — и точно това `make` съхранява върху съвпадението.

{% include nav.html %}
