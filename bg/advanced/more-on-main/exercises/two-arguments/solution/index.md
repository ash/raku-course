---
title: 'Solution: Добавете два аргумента'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Можете да намерите изходния код във файла [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Изход

```console
$ raku two-arguments.raku 2 3
5
```

## Коментари

1. Двата позиционни параметъра получават двете думи от командния ред.

1. Аргументите от командния ред пристигат като низове, но операторът `+` ги преобразува в числа, така че `2` и `3` дават сума `5`.

{% include nav.html %}
