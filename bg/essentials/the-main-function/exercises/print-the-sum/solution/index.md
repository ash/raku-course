---
title: 'Solution: Принтирайте сумата'
---

{% include menu.html %}

Тази програма се състои от една единствена функция `MAIN`, която приема два типизирани аргумента, като и двата са изградени от аргументите от командния ред.

## Код

Ето решението:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Намерете програмата във файла [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/print-the-sum.raku).

## Изход

Опитайте различни входни числа:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Можете също така да опитате да стартирате програмата без аргументи или с аргументи от различни типове и да видите какво ще се случи. Ще говорим за обработката на тези случаи във втората част на курса.

{% include nav.html %}