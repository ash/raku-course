---
title: Розв'язання вправи «Присвоєння з пробілами»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Знайдіть програму у файлі [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Вивід

```
True
```

## Коментарі

1. Оскільки `TOP` є `rule`, пробіли в шаблоні дозволяють пробільні символи навколо `=` у вхідному тексті.

1. Тож `'x = 5'` розбирається. Якби `TOP` був `token`, підійшло б лише `'x=5'`.

Пробіли, які дозволяє `rule`, є **необов'язковими**, а не обов'язковими: значущий пробіл так само радо зіставляється з *нулем* пробілів, як і з одним, тож форма без пробілів теж розбирається:

```raku
say Assign.parse('x=5').defined; # True
```

Тому `rule` однаково приймає і `'x = 5'`, і `'x=5'`, і навіть `'x =5'` — гнучкість без потреби розписувати, де саме пробіл може бути, а де ні.

{% include nav.html %}
