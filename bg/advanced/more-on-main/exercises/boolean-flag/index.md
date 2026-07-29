---
title: Флаг от командния ред
translations_gpt:
---

{% include menu.html %}

## Задача

`Bool` именуван параметър на `MAIN` се превръща в **флаг** вкл./изкл.: изписването на `--flag` го задава на `True`, а пропускането му запазва стойността по подразбиране. Напишете програма, чийто `MAIN` приема `Bool :$shout = False` и отпечатва `HELLO`, когато флагът е зададен, или `hello` в противен случай.

## Пример

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}
