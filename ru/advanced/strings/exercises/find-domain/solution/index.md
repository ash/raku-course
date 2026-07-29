---
title: 'Решение: Доменная часть'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Исходный код можно найти в файле [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Вывод

```
example.com
```

## Комментарии

1. `index('@')` возвращает `4` — позицию символа `@`, считая с нуля.

1. `substr($at + 1)` начинает на один символ после `@` и, поскольку длина не указана, продолжает до конца строки, возвращая `example.com`.

{% include nav.html %}
