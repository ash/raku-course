---
title: Решение на ‘Факториел’
---

{% include menu.html %}

Факториел на `N` е произведение на целите числа от 1 до и включително `N`. Например, факториел на 4 е 1 * 2 * 3 * 4 = 24.

## Код

```raku
my $n = 8;

my $f = 1;
$f *= $_ for 2..$n;

say $f;
```

🦋 Намерете програмата във файла [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/factorial.raku).

## Изход

Стартирайте програмата няколко пъти и опитайте различни стойности на `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Коментари

Тази програма използва оператора `*=`, който е съкратен запис за умножение с присвояване: `$x *= $y` е еквивалентно на `$x = $x * $y`.

Можете да използвате ‘пълен’ цикъл вместо постфиксна форма:

```raku
my $n = 8;

my $f = 1;
for 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Още по темата

Ще се върнем към тази задача няколко пъти. В тази част на курса ще решим този проблем и рекурсивно.

Във втората част на курса ще научим за така наречените оператори за редукция, които правят решението тривиално. Също така ще има начин да се дефинира персонализиран оператор `!`, така че да можете да напишете `$n!` за изчисляване на факториел. Накрая, ще има още една възможност да видите интересно решение, когато ще говорим за клаузата `where`.

{% include nav.html %}