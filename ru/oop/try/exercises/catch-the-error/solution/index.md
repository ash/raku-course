---
title: 'Решение: Перехватите ошибку'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Исходный код можно найти в файле [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Вывод

```
42
False
broken
```

## Комментарии

1. Когда блок отрабатывает без ошибок, `try` просто вычисляется в значение блока, поэтому `$ok`
содержит `42`.

1. `die` внутри второго блока бросает исключение, поэтому тот блок вычисляется в неопределённое
значение и `$bad.defined` даёт `False`.

1. Перехваченное исключение сохраняется в специальной переменной `$!`, а `$!.message` возвращает
переданный ему текст — `broken`.

{% include nav.html %}
