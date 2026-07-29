---
title: 'Решение: Присвояване с интервали'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Намерете програмата във файла [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Изход

```
True
```

## Коментари

1. Понеже `TOP` е `rule`, интервалите в шаблона позволяват празни знаци около `=` във входа.

1. Затова `'x = 5'` се разбира. Ако `TOP` беше `token`, щеше да съвпадне само `'x=5'`.

Интервалите, които `rule` позволява, са **незадължителни**, а не задължителни: значещият интервал съпоставя *нула* интервала също толкова радушно, колкото и един, така че формата без интервали също се разбира:

```raku
say Assign.parse('x=5').defined; # True
```

Затова `rule` приема еднакво `'x = 5'`, `'x=5'` и дори `'x =5'` — гъвкавост, без да се разписва къде точно може и къде не може да има интервал.

{% include nav.html %}
