---
title: 'Решение: Проверьте код возврата'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Исходный код можно найти в файле [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Вывод

```
4
failure
```

## Комментарии

1. `run` возвращает `Proc`. Сохранить его в `$proc` — и затем прочитать — здесь важно: неудачная
команда, чей `Proc` отброшен, бросила бы исключение, а обращение к результату считается его
обработкой.

1. `.exitcode` — это число, которое вернула команда: `4`. Проверка `Proc` как булева значения
отвечает на более простой вопрос: он истинен только тогда, когда код возврата равен `0`, поэтому
здесь он ложен и программа печатает `failure`.

{% include nav.html %}
