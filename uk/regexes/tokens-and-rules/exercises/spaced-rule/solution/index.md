---
title: Розв'язання вправи «Правило з пробілами»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Знайдіть програму у файлі [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Вивід

```
True
```

## Коментарі

1. Оскільки `TOP` є `rule`, кожен пробіл, записаний між викликами `<word>`, вимагає пробільного символу у вхідному тексті.

1. У рядку `'the quick fox'` пробіли стоять між усіма трьома словами, тож він розбирається. Якби `TOP` був `token`, пробіли в шаблоні ігнорувалися б, і розбір зазнав би невдачі.

{% include nav.html %}
