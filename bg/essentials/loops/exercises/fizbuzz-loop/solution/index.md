---
title: 'Solution: FizzBuzz в цикъл'
---

{% include menu.html %}

Този път проверката за делимост се извършва в цикъл. Вместо директно отпечатване, фразата първо се натрупва в отделна променлива и по-късно се интерполира в низ.

## Код

Ето новото решение:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Намерете програмата във файла [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fizbuzz-loop.raku).

## Изход

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Коментар

За педантичен решавач на проблеми, решението може да не е перфектно, тъй като отпечатва интервал след двоеточието дори за онези числа, които не са получили никакъв Fizz или Buzz. Модифицирайте програмата, за да избегнете този проблем.

{% include nav.html %}