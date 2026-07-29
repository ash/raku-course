---
title: 'Solution: FizzBuzz'
---

{% include menu.html %}

Тази задача е класическа интервю задача, която помага да се провери дали мислите за случаите, когато и двете условия са `True`. Ако числото се дели както на 3, така и на 5, програмата трябва да отпечата `FizzBuzz`.

## Код

Ето решението:

```raku
my $n = prompt 'Въведете число: ';

print 'Fizz' ако $n %% 3;
print 'Buzz' ако $n %% 5;
print "\n";
```

🦋 Намерете програмата във файла [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/fizz-buzz.raku).

## Пример

Трябва да тествате няколко класа входни данни:

* Числата, които се делят на 3, напр.: 3, 6, 9, 12.
* Числата, които се делят на 5, напр.: 5, 10, 15, 20.
* Числата, които се делят както на 3, така и на 5, напр.: 15, 30, 45.
* Други числа, които не се делят нито на 3, нито на 5, напр.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Въведете число: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Въведете число: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Въведете число: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Въведете число: 30
FizzBuzz
```

{% include nav.html %}