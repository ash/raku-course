---
title: 'Решение: Включете се към списък'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Намерете програмата във файла [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Изход

```
red
green
blue
```

## Коментари

1. `Supply.from-list` подава трите низа по ред.

1. Включването се изпълнява по веднъж за всеки от тях и го отпечатва.

{% include nav.html %}
