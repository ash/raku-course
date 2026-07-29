---
title: 'Решение: Вид триъгълник'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Изход

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Коментари

1. Пазачът с `unless` отхвърля дължините на страни, които нарушават неравенството на
триъгълника, още преди каквато и да е класификация.

1. Броят на *различните* дължини на страни казва какъв е видът: една означава, че всички
са равни (равностранен), две — че точно една двойка е равна (равнобедрен), три — че
всички са различни (разностранен).

1. Деструктурирането на променливата на цикъла като `-> ($a, $b, $c)` разопакова всеки
вътрешен списък направо в три именувани страни.

{% include nav.html %}
