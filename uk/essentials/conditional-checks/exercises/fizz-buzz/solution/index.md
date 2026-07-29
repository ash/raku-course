---
title: 'Solution: FizzBuzz'
---

{% include menu.html %}

Це завдання є класичним завданням для співбесіди, яке допомагає перевірити, чи враховуєте ви випадки, коли обидві умови є `True`. Якщо число ділиться як на 3, так і на 5, програма повинна вивести `FizzBuzz`.

## Код

Ось рішення:

```raku
my $n = prompt 'Введіть число: ';

print 'Fizz' if $n %% 3;
print 'Buzz' if $n %% 5;
print "\n";
```

🦋 Знайдіть програму у файлі [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/fizz-buzz.raku).

## Приклад

Вам потрібно протестувати кілька класів вхідних даних:

* Числа, що діляться на 3, наприклад: 3, 6, 9, 12.
* Числа, що діляться на 5, наприклад: 5, 10, 15, 20.
* Числа, що діляться як на 3, так і на 5, наприклад: 15, 30, 45.
* Інші числа, які не діляться ні на 3, ні на 5, наприклад: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Введіть число: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Введіть число: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Введіть число: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Введіть число: 30
FizzBuzz
```

{% include nav.html %}