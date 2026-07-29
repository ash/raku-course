---
title: Вправа «Прапорець командного рядка»
translations_gpt:
---

{% include menu.html %}

## Завдання

Іменований параметр `MAIN` типу `Bool` перетворюється на **прапорець** «увімкнено/вимкнено»: запис `--flag` встановлює його в `True`, а його відсутність залишає типове значення. Напишіть програму, `MAIN` якої приймає `Bool :$shout = False` і виводить `HELLO`, коли прапорець встановлено, або `hello` в іншому разі.

## Приклад

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
