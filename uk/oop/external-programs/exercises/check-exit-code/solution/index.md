---
title: 'Розв''язання: Перевірте код завершення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Вихідний код можна знайти у файлі [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Вивід

```
4
failure
```

## Коментарі

1. `run` повертає `Proc`. Збереження його в `$proc` — і подальше читання — тут важливе: невдала команда, чий `Proc` відкинуто, кинула б виняток, а дослідження результату вважається його обробкою.

1. `.exitcode` — це число, яке повернула команда: `4`. Перевірка `Proc` як булевого значення відповідає на простіше запитання — воно істинне лише тоді, коли код завершення дорівнює `0`, тож тут воно хибне, і програма виводить `failure`.

{% include nav.html %}
