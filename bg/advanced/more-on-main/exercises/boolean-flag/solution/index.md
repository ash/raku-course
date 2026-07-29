---
title: 'Solution: Флаг от командния ред'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Можете да намерите изходния код във файла [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Изход

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Коментари

1. `Bool` именуван параметър се превръща във флаг: подаването на `--shout` задава `$shout` на `True`, а пропускането му оставя стойността по подразбиране `False`.

1. Тернарният оператор след това отпечатва `HELLO` или `hello` съответно. За разлика от опция `--name=value`, флагът не приема стойност — важно е единствено неговото присъствие.

{% include nav.html %}
