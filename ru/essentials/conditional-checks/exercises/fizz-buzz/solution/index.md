---
title: 'Решение: FizzBuzz'
---

{% include menu.html %}

Эта задача является классическим вопросом на интервью, которая помогает
проверить, если вы думаете о случаях, когда оба условия истинны. Если число
кратно одновременно трем и пяти, программа должна вывести `FizzBuz`.

## Код

Вот решение задачи:

```raku
my $n = prompt 'Enter a number: ';

print 'Fizz' if $n %% 3;
print 'Buzz' if $n %% 5;
print "\n";
```

🦋 Вы можете найти исходный код в файле [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/fizz-buzz.raku ).

## Пример

Вам нужно проверить несколько классов вводных данных:

* Число кратно трем, например: 3, 6, 9, 12;
* Число кратно пяти, например: 5, 10, 15, 20;
* Число кратно и трем, и пяти, например: 15, 30, 45;
* Число не кратно ни трем, ни пяти, например: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Enter a number: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 30
FizzBuzz
```

{% assign human=1 %}
{% include nav.html %}
