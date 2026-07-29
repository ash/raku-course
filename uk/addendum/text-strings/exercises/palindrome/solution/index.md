---
title: Розв'язання вправи «Перевірка на паліндром»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Знайдіть програму у файлі [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Вивід

```
level: yes
hello: no
racecar: yes
```

## Коментарі

1. `.flip` обертає символи рядка. Слово є паліндромом рівно тоді, коли воно
дорівнює власному оберненню, а тернарний оператор перетворює це на `yes` чи `no`.

{% include nav.html %}
