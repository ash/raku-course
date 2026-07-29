---
title: 'Solution: Типизиран или нетипизиран'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Можете да намерите изходния код във файла [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Изход

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Коментари

1. `dd` отчита двата контейнера по различен начин. За нетипизирания отпечатва само `$untyped`, докато за типизирания добавя префикс с декларирания тип: `Int $typed`. Този префикс е точно разликата, която декларираният тип прави.

1. Празните стойности също се различават. Нетипизиран контейнер започва с обикновената неопределена стойност `Any`, докато типизиран контейнер започва с неопределената стойност на _своя_ тип, `Int`.

1. След като и на двата е присвоено `42`, стойностите изглеждат еднакви, но `$typed` все още носи своя тип и би отхвърлил стойност, която не е цяло число -- за разлика от `$untyped`, който приема всичко.

{% include nav.html %}
