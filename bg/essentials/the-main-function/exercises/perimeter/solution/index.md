---
title: 'Solution: Периметър на правоъгълник'
---

{% include menu.html %}

Тази програма трябва да може да приема или един, или два аргумента от командния ред. В решението тук е показан нов трик. Стойността по подразбиране на втората променлива е зададена на стойността на първата променлива: `sub MAIN($a, $b = $a)`. Така, вместо да създаваме две мулти-функции, имаме обща функция, която задава размера на втората страна, ако фигурата е квадрат.

## Код

Ето решението:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'square' !! 'rectangle';
    say "The perimeter of a $shape is $perimeter.";
}
```

🦋 Намерете програмата във файла [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/perimeter.raku).

## Изход

Опитайте различни входни стойности, за да тествате както квадрати, така и правоъгълници.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
The perimeter of a square is 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
The perimeter of a rectangle is 6.
```

Забележете, че има и трети случай, който също трябва да бъде тестван. Ако се подадат две равни числа, програмата трябва все пак да разбере, че това е квадрат:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
The perimeter of a square is 8.
```

{% include nav.html %}