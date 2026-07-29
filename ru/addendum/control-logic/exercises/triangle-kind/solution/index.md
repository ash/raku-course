---
title: 'Решение: Вид треугольника'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Вывод

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Комментарии

1. Охранное условие с `unless` отбраковывает длины сторон, нарушающие неравенство треугольника,
ещё до всякой классификации.

1. Вид треугольника подсказывает количество *различных* длин сторон: одна означает, что все
стороны равны (равносторонний), две — что равна ровно одна пара (равнобедренный), три — что все
разные (разносторонний).

1. Разбор переменной цикла как `-> ($a, $b, $c)` распаковывает каждый вложенный список прямо
в три именованные стороны.

{% include nav.html %}
