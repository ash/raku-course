---
title: 'Решение: Правило с интервали'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Намерете програмата във файла [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Изход

```
True
```

## Коментари

1. Понеже `TOP` е `rule`, всеки интервал, записан между извикванията на `<word>`, изисква празен знак във входа.

1. Низът `'the quick fox'` има интервали между трите думи, така че се разбира. Ако `TOP` беше `token`, интервалите в шаблона щяха да се пренебрегнат и разборът щеше да се провали.

{% include nav.html %}
