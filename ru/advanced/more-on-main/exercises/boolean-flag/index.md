---
title: Флаг командной строки
translations_gpt:
---

{% include menu.html %}

## Задача

Именованный параметр типа `Bool` у `MAIN` превращается в **флаг** включения/выключения: указание `--flag` устанавливает его в `True`, а отсутствие оставляет значение по умолчанию. Напишите программу, чья подпрограмма `MAIN` принимает `Bool :$shout = False` и выводит `HELLO`, если флаг установлен, или `hello` в противном случае.

## Пример

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Решение

✅ [Смотреть решение](solution)

{% include nav.html %}
