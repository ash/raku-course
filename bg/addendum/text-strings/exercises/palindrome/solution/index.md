---
title: 'Решение: Проверка за палиндром'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Намерете програмата във файла [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Изход

```
level: yes
hello: no
racecar: yes
```

## Коментари

1. `.flip` обръща знаците на низа. Думата е палиндром точно когато е равна на
собственото си обръщане, което тернарният оператор превръща в `yes` или `no`.

{% include nav.html %}
