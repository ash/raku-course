---
title: 'Solution: Типизиран MAIN'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Можете да намерите изходния код във файла [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Изход

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Коментари

1. Ограничението `Int` означава, че думата от командния ред трябва да изглежда като цяло число. При подаване на `5`, стойността се свързва с `$n` и тялото отпечатва `10`.

1. При подаване на `abc`, стойността не може да стане `Int`, така че сигнатурата не съответства. Raku не изпълнява тялото — вместо това отпечатва генерираното съобщение за употреба, като ви дава валидация на аргументите без никакви ръчни проверки.

{% include nav.html %}
