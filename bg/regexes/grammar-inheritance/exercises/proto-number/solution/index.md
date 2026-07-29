---
title: 'Решение: Число с proto'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Намерете програмата във файла [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Изход

```
True
```

## Коментари

1. Прототокенът `number` има два варианта — `dec` и `hex`.

1. За `0xff` вариантът `dec` съпоставя само началната `0`, след което би останало `xff`; вариантът `hex` съпоставя цялото. Затова по правилото за най-дълъг токен се избира `hex` и низът се разбира. Същата граматика продължава да приема и обикновено десетично число като `42`.

{% include nav.html %}
