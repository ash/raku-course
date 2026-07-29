---
title: Розв'язання вправи «Вид трикутника»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Знайдіть програму у файлі [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Вивід

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Коментарі

1. Захисна умова з `unless` відкидає довжини сторін, що порушують нерівність
трикутника, ще до будь-якої класифікації.

1. Кількість *різних* довжин сторін і каже, який це вид: одна означає, що всі
рівні (рівносторонній), дві — що рівна рівно одна пара (рівнобедрений), три —
що всі різні (різносторонній).

1. Деструктуризація змінної циклу як `-> ($a, $b, $c)` розпаковує кожен
внутрішній список просто у три іменовані сторони.

{% include nav.html %}
