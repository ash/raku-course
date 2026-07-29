---
title: Броят на аргументите на командния ред
translations_gpt:
---

{% include menu.html %}

## Задача

Напишете програма, която съобщава с цяло изречение колко аргумента е получила от командния ред. Направете граматиката правилна: използвайте думата `argument`, когато е подаден точно един, и `arguments` във всички останали случаи.

## Пример

Ето как трябва да реагира програмата:

```console
$ raku number-of-command-line-arguments.raku make them count us now
You passed 5 arguments.

$ raku number-of-command-line-arguments.raku solo
You passed 1 argument.
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}
