---
title: 'Розв''язання: Доменна частина'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Вихідний код можна знайти у файлі [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Вивід

```
example.com
```

## Коментарі

1. `index('@')` повертає `4` — позицію знака `@`, рахуючи від нуля.

1. `substr($at + 1)` починає на один символ далі за `@` і, оскільки довжину не задано, доходить до кінця рядка, даючи `example.com`.

{% include nav.html %}
