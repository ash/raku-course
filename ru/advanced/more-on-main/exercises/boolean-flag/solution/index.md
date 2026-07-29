---
title: 'Решение: Флаг командной строки'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Исходный код можно найти в файле [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Вывод

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Комментарии

1. Именованный параметр типа `Bool` становится флагом: передача `--shout` устанавливает `$shout` в `True`, а при его отсутствии остаётся значение по умолчанию `False`.

1. Тернарный оператор выводит `HELLO` или `hello` соответственно. В отличие от опции вида `--name=value`, флаг не принимает значения — имеет значение лишь его наличие.

{% include nav.html %}
