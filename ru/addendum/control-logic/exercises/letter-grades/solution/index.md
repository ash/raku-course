---
title: 'Решение: Буквенные оценки'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Исходный код можно найти в файле [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Вывод

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Комментарии

1. `do given` превращает весь `given`/`when` в выражение, значением которого становится
сработавший блок — здесь буква оценки, — и оно сохраняется в `$grade`.

1. Каждый `when * >= N` — это сравнение с текущим значением через Whatever. Побеждает первое
успешное, поэтому для каждой границы достаточно указать только нижний предел.

{% include nav.html %}
